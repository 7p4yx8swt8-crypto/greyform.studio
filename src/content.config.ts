import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    // Cover
    title: z.string(),
    client: z.string(),
    year: z.number(),
    category: z.string(),

    // Hero image (relative path from /public)
    cover: z.string(),

    // Metadata for the small info block
    services: z.array(z.string()),
    duration: z.string().optional(),
    role: z.string().optional(),
    stack: z.array(z.string()).optional(),

    // Outcome
    liveUrl: z.string().url().optional(),
    launched: z.string().optional(),

    // Sorting / Display
    order: z.number().default(0),
    featured: z.boolean().default(false),

    // SEO
    description: z.string(),

    // Language
    lang: z.enum(["de", "en"]).default("de"),
  }),
});

export const collections = { work };