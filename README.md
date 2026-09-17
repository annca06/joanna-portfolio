# Joanna — Digital Marketing Specialist

An editorial portfolio website. React + Vite, plain CSS, no backend.

The visual concept is **heritage tennis club × editorial newspaper × personal
handwritten notes**: a restrained club palette, newspaper rules and grids, and
a script face used sparingly, like jewellery.

---

## Requirements

**Node.js 20.19+ or 22.12+** (Vite 7 requires this).

> Node is not currently installed on this machine. Download it from
> <https://nodejs.org> (take the LTS build), then reopen your terminal so
> `node` is on your PATH. Check with:
>
> ```bash
> node --version
> ```

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open the URL it prints (usually <http://localhost:5173>).

To make a production build:

```bash
npm run build
```

The finished site lands in `dist/`.

### Previewing without Node

If Node isn't installed yet, there is a fallback that uses only PowerShell:

```bash
powershell -NoProfile -ExecutionPolicy Bypass -File tools/serve.ps1 -Port 5173
```

That serves `preview.html` — a static copy of the page that **links the real
stylesheets**, so what you see is the actual design. It is a stopgap: the React
components in `src/` are the real site. Once Node is installed you can delete
both `preview.html` and `tools/`.

---

## Where the words live

Almost all copy is in `src/content/`, so you can change the site without
touching components:

| File | What it holds |
| --- | --- |
| `site.js` | Name, role, disciplines, nav, contact details |
| `projects.js` | The Selected Work volumes |
| `services.js` | The three services, industries, direction imagery |
| `note.js` | "A Note from Jo" — greeting, intro, expanded note |

### Replacing the logo

The branding area is one component: **`src/components/Brand.jsx`**. It is used
in both the header and the footer, so changing it once updates both.

1. Put your file in `public/` — for example `public/logo.svg`
2. Open `src/components/Brand.jsx` and set:

   ```js
   const LOGO_SRC = '/logo.svg';
   const LOGO_WIDTH = 140; // px, at desktop
   ```

That is the only edit needed. While `LOGO_SRC` is an empty string the site
falls back to a typeset "JOANNA" wordmark, so the header never shows a gap or
a broken image while you are still deciding.

SVG is preferred — it stays crisp at any size. A PNG at roughly twice the
displayed width also works.

There is a second, separate mark: the small `JO` cipher on the `EST. — 2026`
line in the hero. It is plain letterforms between two hairlines, styled by
`.hero__cipher` in `src/sections/Hero.css`.

### Adding or reordering projects

Append an entry to the array in `src/content/projects.js`. **The `VOL.` number
comes from the order of the array**, so numbering can never drift — reorder the
entries and the volumes renumber themselves.

Each entry supports:

| Field | Required | Shown as |
| --- | --- | --- |
| `title` | yes | The project name |
| `category` | no | The italic descriptor under the title |
| `meta` | no | Small tracked line opposite the volume number |
| `description` | no | The paragraph |
| `role`, `services` | no | The notes beneath the description |
| `layout` | yes | `wide-left`, `wide-right` or `inset` |

`layout` controls the asymmetric composition. Cycling through the three keeps
the grid from ever repeating down the page.

### Adding your contact details

In `src/content/site.js`, fill in any of `email`, `instagram`, `linkedin`.
While a field is empty the site shows a greyed placeholder instead of a link —
there are deliberately no dead links anywhere. Fill one in and it becomes a
real link automatically, in both the contact section and the footer.

### Adding a case study link

Each project in `src/content/projects.js` has an `href` field, set to `null`.
Give it a URL and a "Read the case study →" link appears on that project.

### The circled word

In `src/content/note.js`, any word wrapped in `[[double brackets]]` gets a
hand-drawn pen circle around it. Move the brackets to circle a different word.

---

## Replacing the images

The files in `public/images/` are **placeholders** — abstract printed plates,
not photographs.

**Every image on the site is configured from `src/content/`.** You never need
to open a component to change one.

1. Save your photo into `public/images/`
2. Find its entry in the table below and update `src`, `alt` and `caption`

| Shown as | Configured in | Placeholder file |
| --- | --- | --- |
| Fig. 01 — Hero portrait | `site.js` → `heroImage` | `portrait-01.svg` |
| Fig. 02 — Vol. 01, Cristina Dafin | `projects.js` → 1st entry | `work-01.svg` |
| Fig. 03 — Vol. 02, My Portfolio | `projects.js` → 2nd entry | `work-03.svg` |
| Fig. 04 — Vol. 03, PsyCoffee | `projects.js` → 3rd entry | `work-02.svg` |
| Fig. 05 — A Note from Jo | `note.js` → `image` | `note-01.svg` |
| Ref. A / B / C — Direction strip | `services.js` → `directionImages` | `direction-01/02/03.svg` |

Each entry looks the same wherever it lives:

```js
src: '/images/cristina-dafin.jpg',
alt: 'The Cristina Dafin homepage on a laptop, shot from above.',
caption: 'Fig. 02 — Cristina Dafin, 2026',
```

- **Paths start at `/images/…`, not `/public/images/…`** — `public` does not
  appear in the final URL.
- Your photos will be `.jpg` or `.webp`, so remember to change the extension.
- **Delete the `caption` line** and no caption is rendered.
- **Please rewrite the `alt` text.** It currently describes the placeholder,
  not your photograph. It is what a screen reader announces.

### Cropping

Images fill their frame and the overflow is cut off (`object-fit: cover`), and
**the frame's shape changes between desktop and mobile** — the hero is 4:5 tall
on desktop but 3:2 wide on a tablet; project images vary by `layout`. So do not
crop tightly before saving: leave room around the subject or heads and edges
will clip on some screens.

Around 1600–2000px on the long edge, under roughly 400KB, is plenty. The
`width` and `height` attributes on the `<img>` tags do not need updating — CSS
controls the displayed shape.

---

## Design tokens

`src/styles/tokens.css` is the single source of truth for colour, type,
spacing and rules. Change a value there and it updates everywhere.

| Token | Value | Role |
| --- | --- | --- |
| `--c-green` | `#173F35` | Deep tennis green — primary |
| `--c-ivory` | `#F7F4EF` | Warm ivory — background |
| `--c-ink` | `#1F1F1C` | Charcoal — text |
| `--c-cabernet` | `#540212` | Accent — kept to roughly 5–10% |

Three type roles only: an editorial serif (Newsreader) for headlines, a clean
sans (Archivo) for everything functional, and a script (Mrs Saint Delafield)
for rare personal accents. The script is never used for body text.

---

## Structure

```
src/
  content/      the words — edit these
  styles/       tokens.css + base.css
  components/   Brand, Nav, Footer, Reveal, Annotations
  sections/     Hero, SelectedWork, Services, NoteFromJo, Direction, Contact
public/images/  placeholder plates
```

Each component keeps its CSS beside it (`Nav.jsx` / `Nav.css`).

---

## Accessibility

- Semantic landmarks, a skip link, and one `h1`
- Visible cabernet focus rings on every interactive element
- Body text 15:1 contrast, metadata 4.9:1 — both pass WCAG AA
- Touch targets are at least 48px
- `prefers-reduced-motion` removes all animation; the design is built to stand
  up with no motion at all

---

## Deploying

The build output is static, so the free tier of any static host works.

**Vercel or Netlify** — connect the repository and accept the defaults:

- Build command: `npm run build`
- Output directory: `dist`

No environment variables, no database, no server.

---

## What is still a placeholder

- All images
- The logo (a typeset wordmark until you supply an asset — see above)
- Contact details
- The expanded text in "A Note from Jo"

No statistics, client results, testimonials, awards or logos appear anywhere on
the site, and the Direction section is explicitly labelled as reference imagery
rather than client work.
