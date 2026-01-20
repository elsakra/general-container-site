import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    features: z.array(z.string()).optional(),
    specifications: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    image: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    featured: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  products,
  testimonials,
  faq,
};
