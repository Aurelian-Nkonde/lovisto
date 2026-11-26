import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// [TO BE CONFIRMED BY CLIENT] — confirm the live domain before launch.
// Can be overridden with SITE_URL in the deployment environment.
const site = process.env.SITE_URL || 'https://www.lovistotours.co.za';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  adapter: vercel(),
});
