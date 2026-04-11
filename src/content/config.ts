import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().optional(),
    category: z.string(),
    url: z.string().url().optional(),
  }),
});

export const collections = {
  posts,
};
