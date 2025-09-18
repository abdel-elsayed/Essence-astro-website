import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    price: z.number(),
    duration: z.number(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { services };
