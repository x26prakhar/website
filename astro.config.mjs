import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://prakhar-website-astro.vercel.app',
  adapter: vercel(),
  output: 'hybrid',
});
