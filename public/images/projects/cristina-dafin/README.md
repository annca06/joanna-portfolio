# Cristina Dafin — project assets

**Put every Cristina Dafin screenshot in this folder.**

Each file here is a crop of a screenshot of the live website, taken from the
reference folder and cut down to the page itself — browser chrome, tabs and
scrollbars removed, nothing inside the client's interface altered.

## What goes where

| Filename | Shown as | Export |
| --- | --- | --- |
| `home-desktop.jpg` | Homepage VOL. 01 plate, and the large visual at the top of the case study | Desktop homepage, 1600px wide |
| `home-mobile.jpg` | The phone standing against the homepage plate, and 03 — I | Phone homepage, 780px wide |
| `store.jpg` | 03 — II | The Magazin page |
| `workshops.jpg` | 03 — III | The Ateliere & Cursuri page |
| `memberships.jpg` | 03 — IV | The membership tiers |

## Replacing one

1. Save your file here, keeping the same name.
2. If the extension changes, open **`src/content/cristina-dafin.js`** and
   update that entry's `src` and `alt`. The homepage plate and its phone are
   in **`src/content/projects.js`**, under VOL. 01.

- **Paths start at `/joanna-portfolio/images/…`, not `/public/images/…`** —
  `public` does not appear in the final URL.
- **Please rewrite the `alt` text** if the screenshot changes. It is what a
  screen reader announces, so it should describe what is actually on screen.

## Cropping and size

Every frame on both pages uses `object-fit: contain`, so **nothing is ever
cropped** — a screenshot of any proportion sits whole inside its frame.

Crop the browser's own interface away before saving: the page, and only the
page. Around 1000–1600px on the long edge, under roughly 250KB, is plenty.

## What not to put here

No Stripe or Zapier screens, no account or billing pages, no customer data,
no admin or editor views. This folder is published with the site.
