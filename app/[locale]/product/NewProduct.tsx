"use client";

import { useState } from "react";
import { Product, productSchema } from "./ApiProduct";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import Spinner from "@/components/ui/spinner";
import { useTranslations } from "next-intl";

const createProduct = async (product: Partial<Product>) => {
	const res = await fetch("https://dummyjson.com/products/add", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(product),
	});
	const data = await res.json();
	return data;
};

const NewProduct = () => {
	const [productList, setProductList] = useState<Product[]>([]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Partial<Product>>();

	const t = useTranslations();

	const { mutate, isPending } = useMutation({
		mutationFn: createProduct,
		onSuccess: (data) => {
			const validatedData = productSchema.parse(data);
			setProductList((prev) => [
				...prev,
				{ ...validatedData, id: Math.random() },
			]);
			reset();
		},
	});

	console.log("errors", errors);

	const onSubmit = async (data: Partial<Product>) => {
		mutate(data);
	};
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col p-6 border rounded gap-2 max-w-xl'>
				<h2 className='text-xl font-semibold'>{t("newProduct.heading")}</h2>
				<Label htmlFor='title'>{t("newProduct.title")}</Label>
				<Input
					id='title'
					type='text'
					{...register("title", {
						required: {
							value: true,
							message: "This field is required",
						},
					})}
				/>
				{errors.title && (
					<p className='text-red-500 mb-2 text-xs'>{errors.title.message}</p>
				)}
				<Label htmlFor='brand'>{t("newProduct.brand")}</Label>
				<Input
					id='brand'
					type='text'
					{...register("brand", {
						required: {
							value: true,
							message: "This field is required",
						},
					})}
				/>
				{errors.brand && (
					<p className='text-red-500 mb-2 text-xs'>{errors.brand.message}</p>
				)}
				<Label htmlFor='price'>{t("newProduct.price")}</Label>
				<Input
					id='price'
					type='number'
					{...register("price", {
						required: {
							value: true,
							message: "This field is required",
						},
					})}
				/>
				{errors.price && (
					<p className='text-red-500 mb-2 text-xs'>{errors.price.message}</p>
				)}
				<Button type='submit'>
					{isPending ? <Spinner /> : t("newProduct.buttonText")}
				</Button>
			</form>
			{productList.length > 0 && (
				<div className='flex flex-col p-4 border rounded'>
					<h2 className='text-xl font-semibold mb-4'>
						{t("productList.heading")}
					</h2>
					<div className='grid grid-cols-auto-fit gap-4'>
						{productList.map((product) => (
							<div
								key={product.id}
								className='flex flex-col gap-1 p-2 border rounded-sm'>
								<p className='text-lg font-medium'>{product.title}</p>
								<p>{product.brand}</p>
								<p>
									{Number(product.price).toLocaleString("en", {
										style: "currency",
										currency: "USD",
									})}
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default NewProduct;
