import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
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
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    type: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url(),
    highlights: z.array(z.string()),
  }),
});

export const collections = { writing, projects };
