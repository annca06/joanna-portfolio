/* ==========================================================================
   SITE CONTENT
   Almost all of the words on this website live in this folder.
   Edit here rather than in the components.
   ========================================================================== */

export const site = {
  name: 'Joanna',
  role: 'Digital Marketing Specialist',
  disciplines: ['Social Media', 'Visual Design', 'Websites'],
  summary:
    'Helping lifestyle and personal brands build thoughtful, polished digital experiences.',
  established: '2026',
  /* VOL. numbering belongs to the projects, not the chrome — see
     content/projects.js, where each volume is derived from its order. */

  /* The hero portrait.
     `src` is relative to the `public` folder — a file saved as
     public/images/portrait.jpg is written here as '/joanna-portfolio/images/portrait.jpg'.
     Delete the `caption` line and no caption is rendered. */
  heroImage: {
    src: '/joanna-portfolio/images/1_hero-portrait.jpg',
    alt: 'Joanna walking through a sunlit sitting room in a cream silk shirt and wide-leg trousers, a stoneware mug in one hand and a laptop under her arm.',
    caption: 'Fig. 01',
  },
};

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'A Note from Jo', href: '#note' },
  { label: 'Contact', href: '#contact' },
];

/* --------------------------------------------------------------------------
   CONTACT
   Leave a value as an empty string and the site renders the greyed
   placeholder instead of a live link. Fill one in and it becomes a real link.
   -------------------------------------------------------------------------- */
export const contact = {
  email: 'anncaioanna.co@gmail.com',
  instagram: 'https://instagram.com/annca.ioanna',
  linkedin: 'https://linkedin.com/in/annca-ioanna',

  // Shown only while the fields above are still empty. Filled in now, so
  // nothing below is rendered any more — the real links above are used.
  placeholders: {
    email: 'anncaioanna.co@gmail.com',
    instagram: '@annca.ioanna',
    linkedin: 'linkedin.com/in/annca-ioanna',
  },
};

export const contactChannels = [
  { key: 'email', label: 'Email' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'linkedin', label: 'LinkedIn' },
];
