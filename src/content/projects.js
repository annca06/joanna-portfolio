/* ==========================================================================
   SELECTED WORK — the volumes
   ==========================================================================

   Each project is a volume, numbered like chapters of one publication.

   ADDING A PROJECT
   Append an entry to the array below. The VOL. number is derived from the
   order, so numbering can never drift out of step — reorder the array and
   the volumes renumber themselves.

   FIELDS
     title        required — the project name
     category     optional — the short descriptor under the title
     meta         optional — small tracked line opposite the volume number
     description  optional — the paragraph
     role         optional — shown in the notes below the description
     services     optional
     href         optional — a case-study link. Left null, no link renders,
                             so the site never carries a dead link.
     cta          optional — the wording of that link. Defaults to
                             'View Project'.
     layout       'wide-left' | 'wide-right' | 'inset'
                  Controls the asymmetric composition of the row. Cycling
                  through the three keeps the grid from ever repeating.
     fit          optional — 'full' shows the asset whole. The frame takes the
                  image's own proportions instead of a fixed ratio, so nothing
                  is cropped and no ground is added around it. Use it for
                  graphics and banners; photographs are better off filling
                  their frame, which is the default.
   ========================================================================== */

const entries = [
  {
    title: 'Cristina Dafin',
    category: 'Website / Branding / Digital Presence',
    meta: ['Client Project', '2026'],
    description:
      'A website built around a clear, calm customer journey — structure first, then content and visual presentation, so the brand reads as considered from the first screen to the enquiry.',
    role: 'Digital marketing & website build',
    services: 'Site structure, page content, visual presentation',
    image: '${import.meta.env.BASE_URL}images/2_cristina-dafin.jpg',
    alt: 'A Cristina Dafin brand banner: watercolour eucalyptus leaves on pale green, with the script line “Un nou capitol, aceeași misiune. Va urma…” above a small pair of wings.',
    caption: 'Fig. 02',
    layout: 'wide-left',
    fit: 'full',
    href: null,
  },
  {
    title: 'My Portfolio',
    category: 'Personal Brand / Website',
    meta: ['Self-Initiated', '2026'],
    description:
      'This site. A self-initiated project: an editorial layout system borrowed from newspapers and heritage sport, built as a place to put the work rather than a template to fill in.',
    role: 'Concept, art direction & build',
    services: 'Identity direction, layout system, site build',
    image: '${import.meta.env.BASE_URL}images/3_my-portofolio.jpg',
    alt: 'A sunlit marble table laid with an espresso in a gold-rimmed cup, a Formula 1 magazine, an open Vogue and a folded linen napkin.',
    caption: 'Fig. 03',
    layout: 'wide-right',
    fit: 'full',
    href: null,
  },
  {
    title: 'The PsyCoffee',
    category: 'Personal Project · Brand Identity · Editorial Content · Instagram',
    meta: ['Personal Project', 'Since 2025'],
    description:
      'A personal editorial Instagram concept exploring aspirational living, visual nostalgia and heritage-inspired lifestyle storytelling.',
    role: 'Naming, concept development & creative direction',
    services: 'Editorial direction, Reels creation & content curation',
    image: '${import.meta.env.BASE_URL}images/4_the-psycoffee.jpg',
    alt: 'A woman at a stone balustrade at golden hour, looking out over a clay tennis court and a seafront racing circuit.',
    caption: 'Fig. 04',
    layout: 'inset',
    href: '/work/psycoffee/',
    cta: 'View Project',
  },
];

/* VOL. numbers come from the order above — nothing to keep in sync by hand. */
export const projects = entries.map((project, index) => ({
  ...project,
  volume: String(index + 1).padStart(2, '0'),
}));
