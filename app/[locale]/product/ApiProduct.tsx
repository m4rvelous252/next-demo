"use client";

import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { productSchema } from "@/lib/types/product.type";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";

const PAGE_LIMIT = "10";

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
			{isLoading ? (
				<div className='grid grid-cols-auto-fit gap-4'>
					<div className='border p-6 rounded shadow flex flex-col gap-2'>
						<Skeleton className='h-[30px] w-[200px]' />
						<Skeleton className='h-5 w-[100px]' />
						<div className='relative w-full h-48 rounded-sm overflow-hidden'>
							<Skeleton className='w-full h-full' />
						</div>
					</div>
					<div className='border p-6 rounded shadow flex flex-col gap-2'>
						<Skeleton className='h-[30px] w-[200px]' />
						<Skeleton className='h-5 w-[100px]' />
						<div className='relative w-full h-48 rounded-sm overflow-hidden'>
							<Skeleton className='w-full h-full' />
						</div>
					</div>
					<div className='border p-6 rounded shadow flex flex-col gap-2'>
						<Skeleton className='h-[30px] w-[200px]' />
						<Skeleton className='h-5 w-[100px]' />
						<div className='relative w-full h-48 rounded-sm overflow-hidden'>
							<Skeleton className='w-full h-full' />
						</div>
					</div>
					<div className='border p-6 rounded shadow flex flex-col gap-2'>
						<Skeleton className='h-[30px] w-[200px]' />
						<Skeleton className='h-5 w-[100px]' />
						<div className='relative w-full h-48 rounded-sm overflow-hidden'>
							<Skeleton className='w-full h-full' />
						</div>
					</div>
				</div>
			) : (
				<ProductGrid products={data ?? []} />
			)}
		</div>
	);
};

export default ApiProduct;
