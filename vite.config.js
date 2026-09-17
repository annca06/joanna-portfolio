import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* The site is a small multi-page app: the homepage, plus one HTML entry per
   case study. Each page gets a real URL that works on any static host with
   no rewrite rules and no router library.

   ADDING A CASE STUDY
     1. work/<project>/index.html   — copy work/psycoffee/index.html
     2. src/<project>.jsx           — the entry that mounts the page
     3. one line in `input` below

   The route is the folder: work/psycoffee/index.html  →  /work/psycoffee/
*/
const entry = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  base: '/joanna-portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: entry('./index.html'),
        psycoffee: entry('./work/psycoffee/index.html'),
      },
    },
  },
});
