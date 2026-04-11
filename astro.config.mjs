import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://prakharsingh.vercel.app',
  adapter: vercel(),
  output: 'static',
});
