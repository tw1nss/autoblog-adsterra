import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Skema ini harus cocok dengan format YAML dari prompt AI
	schema: z.object({
		title: z.string(),
		slug: z.string().optional(),
		date: z.coerce.date(),
		category: z.string().default('Umum'),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog };