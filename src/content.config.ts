import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().trim().min(1),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    canonical: z.string().optional(),
    visualization: z.enum(["survival-to-80", "quality-layers"]).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    type: z.string(),
    stack: z.array(z.string()),
    repo: z.url(),
    highlights: z.array(z.string()),
  }),
});

export const collections = { writing, projects };
