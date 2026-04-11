import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().optional(),
    category: z.union([z.string(), z.array(z.string())]).transform(val => Array.isArray(val) ? val : [val]),
    url: z.string().url().optional(),
  }),
});

export const collections = {
  posts,
};
