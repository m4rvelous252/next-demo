import { z } from "zod";

export const productSchema = z.object({
	id: z.number(),
	title: z.string(),
	description: z.string().optional(),
	price: z.union([z.number(), z.string()]),
	discountPercentage: z.number().optional(),
	rating: z.number().optional(),
	stock: z.number().optional(),
	brand: z.string(),
	category: z.string().optional(),
	thumbnail: z.string().optional(),
	images: z.array(z.string()).optional(),
});

export type Product = z.infer<typeof productSchema>;
