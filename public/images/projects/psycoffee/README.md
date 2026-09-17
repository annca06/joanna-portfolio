# PsyCoffee — project assets

**Put every PsyCoffee screenshot and visual in this folder.**

The `.svg` files here are placeholders — abstract printed plates with a visible
label, not real content. Replace them with your own exports.

## What goes where

| Filename | Shown as | Ideal export |
| --- | --- | --- |
| `profile-screenshot.svg` | The large visual at the top of the case study | Instagram profile screenshot, a mobile-device mockup, or an editorial composition |
| `reel-whispers-of-hope.svg` | Selected Work — I | 9:16 portrait |
| `reel-dreams.svg` | Selected Work — II | 9:16 portrait |
| `reel-memories.svg` | Selected Work — III | 9:16 portrait |
| `reel-summer-recap-in-cali.svg` | Selected Work — IV | 9:16 portrait |
| `reel-24-hours-at-wimbledon.svg` | Selected Work — V | 9:16 portrait |
| `reel-one-minute-in-monaco.svg` | Selected Work — VI | 9:16 portrait |

## Replacing one

1. Save your file here, keeping the same name but your own extension —
   `reel-dreams.jpg`, for example.
2. Open **`src/content/psycoffee.js`** and update that entry's `src` and `alt`:

   ```js
   src: '/images/projects/psycoffee/reel-dreams.jpg',
   alt: 'A short description of what the screenshot actually shows.',
   ```

- **Paths start at `/images/…`, not `/public/images/…`** — `public` does not
  appear in the final URL.
- **Please rewrite the `alt` text.** It currently describes the placeholder,
  not your screenshot. It is what a screen reader announces.

## Cropping

Both the hero plate and the gallery frames use `object-fit: contain`, so
**nothing is ever cropped** — a 9:16 Reel fills its frame exactly, and a taller
phone screenshot (9:19.5) sits centred on the plate with a little breathing
room either side, like a device on a page.

Around 1200–1600px on the long edge, under roughly 400KB, is plenty.
