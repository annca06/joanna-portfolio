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
     description  optional — the paragraph, or an array of paragraphs
     role         optional — shown in the notes below the description
     services     optional
     facts        optional — [{ label, value }] where a project needs notes
                             other than Role and Services. Left out, the two
                             fields above are used, so nothing else changes.
     image        required — the plate
     inset        optional — { src, alt } for a second, smaller view that
                             overlaps the plate: a phone beside a desktop
                             screenshot. Left out, nothing is rendered.
     href         optional — a case-study link. Left null, no link renders,
                             so the site never carries a dead link.
     cta          optional — the wording of that link. Defaults to
                             'View Project'.
     links        optional — [{ label, href, external }] where a project
                             needs more than one call to action. An external
                             entry opens in a new tab. Left out, `href` and
                             `cta` make the single link as before.
     layout       'wide-left' | 'wide-right' | 'inset'
                  Controls the asymmetric composition of the row. Cycling
                  through the three keeps the grid from ever repeating.
     fit          optional — 'full' shows the asset whole. The frame takes the
                  image's own proportions instead of a fixed ratio, so nothing
                  is cropped and no ground is added around it. Use it for
                  graphics, banners and screenshots; photographs are better
                  off filling their frame, which is the default.
   ========================================================================== */

const entries = [
  {
    title: 'Cristina Dafin',
    category: 'Website Strategy / Visual Design / Digital Experience',
    meta: ['Client Project', '2026'],
    description: [
      'A thoughtful digital home for an author and wellness practitioner, bringing together storytelling, services, digital products, and community.',
      'From website architecture and visual presentation to digital commerce and automated customer journeys, the project was designed to create a cohesive, intuitive experience — from first visit to purchase and beyond.',
    ],
    facts: [
      { label: 'Role', value: 'Website Development & Digital Experience' },
      {
        label: 'Services',
        value:
          'Website Structure · Content & Visual Design · Digital Commerce · Memberships · Email Automations',
      },
      { label: 'Platforms & Tools', value: 'Ghost · Stripe · Zapier' },
      { label: 'Status', value: 'Launched / 2026' },
    ],
    image: '/joanna-portfolio/images/projects/cristina-dafin/home-desktop.jpg',
    alt: 'The published Cristina Dafin homepage on a desktop screen: a textured ivory page carrying the green script line “Alege calea către tine” above “Spații dedicate creșterii tale interioare” and a drawn pair of wings, with the navigation reading A.C.A.S.A., Ateliere & Cursuri, Terapii, Magazin, Contact and Blog.',
    inset: {
      src: '/joanna-portfolio/images/projects/cristina-dafin/home-mobile.jpg',
      alt: 'The same homepage on a phone: the wings motif and the line “Autor · Terapeut · Wellness Coach” above a photograph of Cristina Dafin holding her book, opening the Cărți section.',
    },
    caption: 'Fig. 02',
    layout: 'wide-left',
    fit: 'full',
    href: '/joanna-portfolio/work/cristina-dafin/',
    links: [
      { label: 'View Live Website', href: 'https://cristinadafin.ro', external: true },
      { label: 'Explore the Project', href: '/joanna-portfolio/work/cristina-dafin/' },
    ],
  },
  {
    title: 'My Portfolio',
    category: 'Personal Brand / Website',
    meta: ['Self-Initiated', '2026'],
    description:
      'This site. A self-initiated project: an editorial layout system borrowed from newspapers and heritage sport, built as a place to put the work rather than a template to fill in.',
    role: 'Concept, art direction & build',
    services: 'Identity direction, layout system, site build',
    image: '/joanna-portfolio/images/3_my-portofolio.jpg',
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
    image: '/joanna-portfolio/images/4_the-psycoffee.jpg',
    alt: 'A woman at a stone balustrade at golden hour, looking out over a clay tennis court and a seafront racing circuit.',
    caption: 'Fig. 04',
    layout: 'inset',
    href: '/joanna-portfolio/work/psycoffee/',
    cta: 'View Project',
  },
];

/* The notes under a description. A project can set `facts` outright; otherwise
   Role and Services are used, exactly as they always were. */
function factsFor(project) {
  if (project.facts) return project.facts;

  return [
    project.role && { label: 'Role', value: project.role },
    project.services && { label: 'Services', value: project.services },
  ].filter(Boolean);
}

/* The calls to action. A project can set `links` outright; otherwise the
   single `href` / `cta` pair is used, and a project without a case study
   still renders no link at all. */
function linksFor(project) {
  if (project.links) return project.links;
  if (!project.href) return [];

  return [{ label: project.cta || 'View Project', href: project.href }];
}

/* VOL. numbers come from the order above — nothing to keep in sync by hand.
   Descriptions, notes and links are normalised here so the section only ever
   reads one shape. */
export const projects = entries.map((project, index) => ({
  ...project,
  volume: String(index + 1).padStart(2, '0'),
  description: [project.description].flat().filter(Boolean),
  facts: factsFor(project),
  links: linksFor(project),
}));
