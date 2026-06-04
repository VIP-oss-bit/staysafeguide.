import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Must match a cluster `name` in src/consts.ts
    cluster: z.string(),
    author: z.string().default('Iulian Pais'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
