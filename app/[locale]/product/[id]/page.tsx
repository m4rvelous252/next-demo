import { productSchema } from "@/lib/types/product.type";
import ProductDetails from "./ProductDetails";

const getProductDetails = async (id: string) => {
	const res = await fetch(`https://dummyjson.com/product/${id}`, {});
	const data = await res.json();

	const validatedData = productSchema.safeParse(data);

	if (!validatedData.success) {
		throw new Error("Product not found");
	}

	return validatedData.data;
};

const ProductDetailsPage = async ({
	params: { id },
}: {
	params: { id: string };
}) => {
	const product = await getProductDetails(id);

	return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
