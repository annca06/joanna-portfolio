/* ==========================================================================
   VOL. 03 — THE PSYCOFFEE
   Every word and every image path for the case study lives in this file.
   Edit here rather than in the components.

   IMAGES
   All PsyCoffee assets belong in `public/images/projects/psycoffee/`.
   Paths below start at `/images/…` — `public` never appears in the URL.
   See that folder's README.md for what goes where.
   ========================================================================== */

export const psycoffee = {
  volume: '03',
  title: 'The PsyCoffee',
  category: 'Personal Project · Brand Identity · Editorial Content · Instagram',

  intro:
    'The PsyCoffee is a personal editorial Instagram concept built around aspirational living, visual nostalgia and heritage-inspired lifestyle storytelling. Created as a creative experiment, the project explores how a refined aesthetic world can be translated into a recognisable content direction through Reels, imagery and tone.',

  /* The large visual at the top of the page. Swap `src` for an Instagram
     profile screenshot, a device mockup or an editorial composition — the
     frame never crops, so any of the three sits correctly. */
  heroImage: {
    src: '/joanna-portfolio/images/projects/psycoffee/Instagram-profile-screenshot.jpg',
    alt: 'The Instagram profile for the.psycoffee, titled “Cup of Jo”, with the bio “this is her world, a curated nostalgia of elegance lost and found” and three story highlights: Pursuits, Memoirs and Her.',
    caption: 'Fig. 01',
  },

  /* ---------- 01 — The Idea ---------- */
  idea: [
    'The project began as a way to explore a world I have always been drawn to — one shaped by Ralph Lauren sensibilities, la dolce vita references, understated elegance and the kind of visual nostalgia that feels both distant and deeply personal.',
    'The concept became a space for imagining a lifestyle through visual storytelling: elegant destinations, cultural moments, slow living, refined femininity and the atmosphere surrounding them.',
  ],

  /* ---------- 02 — The Objective ---------- */
  objective: {
    intro:
      'Rather than focusing on growth-first social media tactics, the objective was to build a coherent brand world and explore how mood, aspiration and identity could be expressed through short-form editorial content.',
    items: [
      {
        number: 'i.',
        title: 'Build a recognisable identity',
        description: 'Establish a consistent visual and emotional direction.',
      },
      {
        number: 'ii.',
        title: 'Translate aspiration into content',
        description:
          'Turn an abstract lifestyle idea into tangible short-form storytelling.',
      },
      {
        number: 'iii.',
        title: 'Develop an editorial language',
        description:
          'Create consistency across imagery, typography, tone and subject matter.',
      },
    ],
  },

  /* ---------- 03 — The Audience ---------- */
  audience: [
    'The PsyCoffee is intended for people drawn to refined, aspirational living, understated elegance, heritage-inspired aesthetics and a slower, more intentional approach to lifestyle.',
    'The audience is defined more by shared cultural interests and aesthetic sensibilities than by a narrow demographic profile.',
  ],

  /* ---------- 04 — Brand Direction ---------- */
  brandDirection: {
    traits: [
      'Earthy & Neutral Palette',
      'Elegant Typography',
      'Editorial Storytelling',
      'Visual Nostalgia',
      'Old-Money Influence',
      'Dolce Far Niente Mood',
      'La Dolce Vita Inspiration',
      'Understated Femininity',
    ],
    note: 'The visual system combines warm, muted imagery with elegant typography and cinematic references. The intention is not to reproduce luxury literally, but to communicate the codes surrounding it: restraint, atmosphere, heritage, leisure and attention to detail.',
  },

  /* ---------- 05 — Content Pillars ---------- */
  pillars: [
    {
      numeral: 'I',
      title: 'Editorial Escapes',
      description:
        'Destinations, cultural moments and imagined experiences presented through aspirational short-form storytelling.',
      examples: 'Examples include California, Monaco and Wimbledon-inspired content.',
    },
    {
      numeral: 'II',
      title: 'Visual Memoirs',
      description:
        'Dreamlike fragments built around memory, atmosphere and imagined experiences.',
      examples: 'Examples include themes such as Whispers of Hope, Dreams and Memories.',
    },
    {
      numeral: 'III',
      title: 'Refined Femininity',
      description:
        'A softer exploration of style, rituals, presence and sophisticated feminine imagery within the wider lifestyle world.',
      examples: null,
    },
  ],

  /* ---------- 06 — My Role ---------- */
  role: [
    'Naming',
    'Concept Development',
    'Creative Direction',
    'Editorial Direction',
    'Reels Creation',
    'Content Curation',
  ],

  /* ---------- 07 — Selected Work ----------
     The six covers, cut out of the profile grid screenshot. The frame uses
     object-fit: contain, so a cover of any proportion sits whole. */
  gallery: [
    {
      numeral: 'I',
      title: 'Whispers of Hope',
      src: '/joanna-portfolio/images/projects/psycoffee/reel-whispers-of-hope.jpg',
      alt: 'Reel cover: a clay tennis court on a cliffside terrace above the sea at sunset, titled “Whispers of Hopes” in gold script.',
    },
    {
      numeral: 'II',
      title: 'Dreams',
      src: '/joanna-portfolio/images/projects/psycoffee/reel-dreams.jpg',
      alt: 'Reel cover: a hillside town above a seafront racing circuit at sunset, titled “Dreams” in gold script.',
    },
    {
      numeral: 'III',
      title: 'Memories',
      src: '/joanna-portfolio/images/projects/psycoffee/reel-memories.jpg',
      alt: 'Reel cover: a woman on a terrace holding a coffee, looking out over a coastal town and racetrack, titled “Memories” in gold script.',
    },
    {
      numeral: 'IV',
      title: 'Summer Recap in Cali',
      src: '/joanna-portfolio/images/projects/psycoffee/reel-summer-recap-in-cali.jpg',
      alt: 'Reel cover: an armful of white peonies and a paper bag of peaches, titled “Summer recap in Cali”.',
    },
    {
      numeral: 'V',
      title: '24 Hours at Wimbledon',
      src: '/joanna-portfolio/images/projects/psycoffee/reel-24-hours-at-wimbledon.jpg',
      alt: 'Reel cover: a woman in tennis whites and a green tie carrying a coffee past an ivy-clad clubhouse, titled “24 Hours at Wimbledon”.',
    },
    {
      numeral: 'VI',
      title: '1 Minute I Imagined I Was in Monaco',
      src: '/joanna-portfolio/images/projects/psycoffee/reel-one-minute-in-monaco.jpg',
      alt: 'Reel cover: a close portrait of a woman in dark cat-eye sunglasses, titled “1 Minute I Imagined I Was in Monaco”.',
    },
  ],

  /* ---------- 08 — Early Insights ----------
     Figures as reported by Instagram for the two Reels below. Nothing here is
     rounded, extrapolated or presented as a result. If a figure is not in this
     list it is because it was not measured — do not invent one. */
  insights: {
    reels: [
      {
        title: '24 Hours at Wimbledon',
        metrics: [
          { label: 'Views', value: '372' },
          { label: 'Viewers', value: '329' },
          { label: 'Likes', value: '3' },
          { label: 'Shares', value: '1' },
          { label: 'Average watch time', value: '4 sec' },
          { label: 'Follows', value: '0' },
        ],
      },
      {
        title: 'Summer Recap in Cali',
        metrics: [
          { label: 'Views', value: '140' },
          { label: 'Viewers', value: '117' },
          { label: 'Likes', value: '4' },
          { label: 'Comments', value: '2' },
          { label: 'Shares', value: '1' },
          { label: 'Average watch time', value: '4 sec' },
          { label: 'Follows', value: '0' },
        ],
      },
    ],
    interpretation:
      'Even with a small existing audience, selected Reels reached beyond the account’s follower base. Among the available examples, the Wimbledon-themed Reel generated the strongest reach, suggesting early potential for aspirational, event-led storytelling built around recognisable cultural references.',
  },

  /* ---------- 09 — The Takeaway ---------- */
  takeaway: [
    'The PsyCoffee became an exercise in brand-world building: taking an abstract lifestyle aspiration and translating it into a more recognisable visual and editorial identity.',
    'The project demonstrates how creative direction, content curation and short-form storytelling can work together to give an idea its own atmosphere, language and point of view.',
  ],

  /* ---------- Project details ---------- */
  details: [
    { label: 'Project', value: 'The PsyCoffee' },
    { label: 'Type', value: 'Personal Side Project' },
    { label: 'Platform', value: 'Instagram' },
    { label: 'Started', value: 'December 2025' },
    { label: 'Status', value: 'Ongoing' },
    { label: 'Focus', value: 'Brand Identity · Editorial Content · Short-Form Video' },
  ],
};

/* --------------------------------------------------------------------------
   FOOT OF THE PAGE
   `href: null` renders the label without a link, so the site never carries a
   dead link. Give VOL. 02 a URL once its case study actually exists.
   -------------------------------------------------------------------------- */
export const psycoffeeNav = {
  previous: {
    label: 'Previous Project',
    volume: '02',
    title: 'My Portfolio',
    href: null,
  },
  index: {
    label: 'Back to Work',
    href: '/joanna-portfolio/#work',
  },
};
