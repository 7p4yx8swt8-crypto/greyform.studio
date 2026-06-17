import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    category: z.string(),
    cover: z.string(),
    services: z.array(z.string()),
    duration: z.string().optional(),
    role: z.string().optional(),
    stack: z.array(z.string()).optional(),
    liveUrl: z.string().url().optional(),
    launched: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    description: z.string(),
    lang: z.enum(["de", "en"]).default("de"),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    lang: z.enum(["de", "en"]).default("de"),
  }),
});

export const collections = { work, journal };
