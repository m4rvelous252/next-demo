"use client";

import ProductGrid from "@/components/ProductGrid";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";

const PAGE_LIMIT = "10";

export const productSchema = z.object({
	id: z.number(),
	title: z.string(),
	description: z.string(),
	price: z.number(),
	discountPercentage: z.number(),
	rating: z.number(),
	stock: z.number(),
	brand: z.string(),
	category: z.string(),
	thumbnail: z.string(),
	images: z.array(z.string()),
});

export type Product = z.infer<typeof productSchema>;

const getApiProduct = async ({ page }: { page?: number }) => {
	const params = new URLSearchParams();
	params.set("limit", PAGE_LIMIT);
	if (page) {
		const skip = (page - 1) * parseInt(PAGE_LIMIT);
		params.set("skip", skip.toString());
	}
	console.log("params", params.toString());
	const res = await fetch(
		`https://dummyjson.com/products?${params.toString()}`,
		{}
	);
	const data = await res.json();

	const validatedData = z
		.object({
			products: z.array(productSchema),
			total: z.number(),
		})
		.parse(data);

	return validatedData.products;
};

const ApiProduct = () => {
	const [page, setPage] = useState(1);
	const { data, isError, isLoading } = useQuery({
		queryKey: ["api-products", { page }],
		queryFn: () => getApiProduct({ page }),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;

	return (
		<div className='grid'>
			<div className='flex'>
				<button onClick={() => setPage(page - 1)} disabled={page === 1}>
					Previous
				</button>
				<button onClick={() => setPage(page + 1)}>Next</button>
			</div>
			<ProductGrid products={data ?? []} />
		</div>
	);
};

export default ApiProduct;
