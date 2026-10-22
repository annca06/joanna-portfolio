/* ==========================================================================
   VOL. 01 — CRISTINA DAFIN
   Every word and every image path for the case study lives in this file.
   Edit here rather than in the components.

   IMAGES
   All Cristina Dafin assets belong in `public/images/projects/cristina-dafin/`.
   Paths below start at `/joanna-portfolio/images/…` — `public` never appears
   in the URL. See that folder's README.md for what goes where.

   A NOTE ON ACCURACY
   This is a client project, so the page describes only what was actually
   done: structure, content, visual presentation, configuration and
   integration. There are no figures, no results and no claims of custom
   software. Please keep it that way when editing.
   ========================================================================== */

const base = '/joanna-portfolio/images/projects/cristina-dafin';

export const cristinaDafin = {
  volume: '01',
  title: 'Cristina Dafin',
  category: 'Website Strategy / Visual Design / Digital Experience',

  intro:
    'A thoughtful digital home for an author and wellness practitioner, bringing together storytelling, services, digital products, and community. From website architecture and visual presentation to digital commerce and automated customer journeys, the project was designed to create a cohesive, intuitive experience — from first visit to purchase and beyond.',

  heroImage: {
    src: `${base}/home-desktop.jpg`,
    alt: 'The published homepage on a desktop screen: a textured ivory page carrying the green script line “Alege calea către tine” above “Spații dedicate creșterii tale interioare” and a drawn pair of wings, with the navigation reading A.C.A.S.A., Ateliere & Cursuri, Terapii, Magazin, Contact and Blog.',
    caption: 'Fig. 01 — The homepage, as published',
  },

  /* ---------- 01 — The Vision ---------- */
  vision: [
    'Cristina Dafin is an author, therapist and wellness coach. The work spans a published book, one-to-one therapies, workshops and courses, a small collection of products, and writing that is published regularly.',
    'Until now those strands lived apart. The brief was to give them one address: a digital home where the storytelling, the services, the products and the community sit together in the same calm, considered world.',
    'The site had to carry the client’s own voice and visual language rather than a studio’s, and it had to let someone arrive through any one of those doors and find the rest of the work waiting for them.',
  ],

  /* ---------- 02 — The Approach ---------- */
  approach: {
    intro:
      'Structure before surface: what a visitor comes for, in what order, and what the site should offer them next.',
    items: [
      {
        number: 'i.',
        title: 'Website structure',
        description:
          'The site was mapped around what someone actually arrives for — the writing, the therapies, the workshops and courses, and the shop — before any page was designed.',
      },
      {
        number: 'ii.',
        title: 'Navigation',
        description:
          'Six entries, each one a destination rather than a category: A.C.A.S.A., Ateliere & Cursuri, Terapii, Magazin, Contact and Blog.',
      },
      {
        number: 'iii.',
        title: 'Content organisation',
        description:
          'Every page opens in the client’s own voice, sets out what is on offer, and closes on a single clear next step.',
      },
      {
        number: 'iv.',
        title: 'Visual consistency',
        description:
          'One typographic palette, one family of line drawings and one paper ground, carried across every template so the site reads as a single piece.',
      },
      {
        number: 'v.',
        title: 'The user journey',
        description:
          'First visit, enquiry, purchase and what arrives afterwards were planned as one continuous route rather than as separate pages.',
      },
    ],
  },

  /* ---------- 03 — The Digital Experience ----------
     Authentic screenshots of the live site. Nothing here is a mock-up, and
     nothing in the client's interface has been redrawn or retouched. */
  experience: {
    intro:
      'The pages as they are published: the homepage on a phone, the shop, the workshops and courses, and the membership tiers.',
    plates: [
      {
        numeral: 'I',
        title: 'The homepage, on a phone',
        note: 'The same opening line and the same mark, set for one hand.',
        src: `${base}/home-mobile.jpg`,
        alt: 'The homepage on a phone: the wings motif and the line “Autor · Terapeut · Wellness Coach” above a photograph of Cristina Dafin holding her book, opening the Cărți section.',
      },
      {
        numeral: 'II',
        title: 'Magazin — the shop',
        note: 'An introduction in the client’s voice, then the collections.',
        src: `${base}/store.jpg`,
        alt: 'The Magazin page: the word “Magazin” in green script above a welcome passage in Romanian, with line-drawn icons introducing the Cărți and Ritualuri collections.',
      },
      {
        numeral: 'III',
        title: 'Ateliere & Cursuri',
        note: 'Workshops and courses, each given its own short description.',
        src: `${base}/workshops.jpg`,
        alt: 'The Ateliere & Cursuri page: an introductory passage in Romanian above two line-drawn icons headed Ateliere and Cursuri, each with a short description.',
      },
      {
        numeral: 'IV',
        title: 'Membership tiers',
        note: 'Two levels of access, configured in Ghost and billed through Stripe.',
        src: `${base}/memberships.jpg`,
        alt: 'The membership tiers: two cards, Basic at RON 30 a month and Premium at RON 60 a month, each listing what the tier includes above an “Alege” button.',
      },
    ],
  },

  /* ---------- 04 — Behind the Scenes ----------
     Configuration and integration, described plainly. No credentials, no
     account details, no customer data — and nothing claimed that was not
     actually set up. */
  behindTheScenes: {
    intro:
      'The site is published with Ghost. The work here was configuration and integration rather than bespoke development: three services set up so that the pieces behave as one.',
    stack: [
      {
        numeral: 'I',
        name: 'Ghost',
        role: 'The platform',
        description:
          'Pages and templates, the navigation, the blog and the membership tiers with their levels of access are all configured here. The theme was set up and adapted to the client’s visual language rather than written from scratch.',
      },
      {
        numeral: 'II',
        name: 'Stripe',
        role: 'Digital commerce',
        description:
          'Connected to Ghost to take payment for memberships and digital products. Checkout, subscriptions and billing are handled on Stripe’s side; the site itself holds none of it.',
      },
      {
        numeral: 'III',
        name: 'Zapier',
        role: 'Automated journeys',
        description:
          'Watches for a completed purchase and triggers what follows it, so the customer receives their digital product by email automatically instead of waiting for it to be sent by hand.',
      },
    ],
    note: 'Nothing here was written from scratch as custom software. The work was in choosing the platform, configuring it carefully, and connecting the three services so that a purchase made at midnight is fulfilled at midnight.',
  },

  /* ---------- 05 — The Final Result ---------- */
  result: {
    statement:
      'The website is live, with the shop, the membership tiers and the automated delivery running as part of it.',
    note: 'Launched in 2026. The site continues as the client’s own: new writing, workshops and products are published to it without a developer in the loop.',
    link: {
      label: 'View Live Website',
      href: 'https://cristinadafin.ro',
      display: 'cristinadafin.ro',
    },
  },

  /* ---------- Project details ---------- */
  details: [
    { label: 'Project', value: 'Cristina Dafin' },
    { label: 'Type', value: 'Client Project' },
    { label: 'Role', value: 'Website Development & Digital Experience' },
    { label: 'Platforms & Tools', value: 'Ghost · Stripe · Zapier' },
    { label: 'Status', value: 'Launched / 2026' },
    {
      label: 'Focus',
      value:
        'Website Structure · Content & Visual Design · Digital Commerce · Memberships · Email Automations',
    },
  ],
};

/* --------------------------------------------------------------------------
   FOOT OF THE PAGE
   VOL. 02 has no case study of its own yet, so the reader is sent on to the
   next volume that does. Point `next` at VOL. 02 once it exists.
   -------------------------------------------------------------------------- */
export const cristinaDafinNav = {
  next: {
    label: 'Next Case Study',
    volume: '03',
    title: 'The PsyCoffee',
    href: '/joanna-portfolio/work/psycoffee/',
  },
  index: {
    label: 'Back to Work',
    href: '/joanna-portfolio/#work',
  },
};
