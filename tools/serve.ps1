# =============================================================================
# Minimal static file server — no dependencies, no Node required.
#
# This exists so the site can be previewed on a machine without Node installed.
# It serves the project folder over http://localhost:<port>/ and opens
# preview.html by default.
#
# The real development workflow is `npm run dev` (Vite). Once Node is
# installed you can delete this file and preview.html.
#
#   powershell -NoProfile -ExecutionPolicy Bypass -File tools/serve.ps1 -Port 5173
# =============================================================================

param([int]$Port = 0)

$ErrorActionPreference = 'Stop'

# -Port wins; then the PORT environment variable, so a launcher can assign one;
# then the usual default.
if ($Port -le 0) {
  if ($env:PORT -and [int]::TryParse($env:PORT, [ref]([int]0))) {
    $Port = [int]$env:PORT
  } else {
    $Port = 5173
  }
}

$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path

$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.jsx'  = 'text/javascript; charset=utf-8'
  '.svg'  = 'image/svg+xml'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.webp' = 'image/webp'
  '.json' = 'application/json; charset=utf-8'
  '.woff2' = 'font/woff2'
  '.ico'  = 'image/x-icon'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
  $listener.Start()
} catch {
  Write-Error "Could not bind to port $Port. $($_.Exception.Message)"
  exit 1
}

Write-Host "Serving $root"
Write-Host "  ->  http://localhost:$Port/preview.html"
Write-Host "Press Ctrl+C to stop."

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
  } catch {
    break
  }

  $res = $ctx.Response
  try {
    $rel = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($rel)) { $rel = 'preview.html' }

    $target = Join-Path $root ($rel -replace '/', '\')

    # Keep requests inside the project folder.
    $full = $null
    if (Test-Path -LiteralPath $target) {
      $full = (Resolve-Path -LiteralPath $target).Path
    }

    if ($null -ne $full -and $full.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $full -PathType Leaf)) {
      $ext = [System.IO.Path]::GetExtension($full).ToLowerInvariant()
      $type = $mime[$ext]
      if (-not $type) { $type = 'application/octet-stream' }

      $bytes = [System.IO.File]::ReadAllBytes($full)
      $res.StatusCode = 200
      $res.ContentType = $type
      $res.Headers.Add('Cache-Control', 'no-store')
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $body = [System.Text.Encoding]::UTF8.GetBytes("404 - not found: /$rel")
      $res.StatusCode = 404
      $res.ContentType = 'text/plain; charset=utf-8'
      $res.ContentLength64 = $body.Length
      $res.OutputStream.Write($body, 0, $body.Length)
    }
  } catch {
    try { $res.StatusCode = 500 } catch {}
  } finally {
    try { $res.OutputStream.Close() } catch {}
  }
}

$listener.Stop()
