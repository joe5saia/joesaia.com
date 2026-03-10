import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
    canonical: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    type: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url(),
    highlights: z.array(z.string()),
  }),
});

export const collections = { writing, projects };
