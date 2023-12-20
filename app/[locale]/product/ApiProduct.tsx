"use client";

import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";

const PAGE_LIMIT = "10";

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

const getApiProduct = async ({ page }: { page?: number }) => {
	const params = new URLSearchParams();
	params.set("limit", PAGE_LIMIT);
	if (page) {
		const skip = (page - 1) * parseInt(PAGE_LIMIT);
		params.set("skip", skip.toString());
	}
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
	const t = useTranslations();
	const [page, setPage] = useState(1);
	const { data, isError, isLoading } = useQuery({
		queryKey: ["api-products", { page }],
		queryFn: () => getApiProduct({ page }),
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;

	return (
		<div className='grid gap-2' data-test-id='api-product'>
			<div className='flex justify-between gap-2 flex-wrap'>
				<div className='flex gap-2'>
					<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
						{t("prev")}
					</Button>
					<Button onClick={() => setPage(page + 1)}>{t("next")}</Button>
				</div>
				<Button asChild>
					<Link date-testid='go-to-add-product' href={"/add-product"}>
						{t("addProduct.title")}
					</Link>
				</Button>
			</div>
			<ProductGrid products={data ?? []} />
		</div>
	);
};

export default ApiProduct;
