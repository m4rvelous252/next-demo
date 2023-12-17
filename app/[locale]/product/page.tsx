import { getTranslations } from "next-intl/server";
import ApiProduct from "./ApiProduct";

const getProductList = async () => {};

const ProductPage = async () => {
	const t = await getTranslations("product");
	return (
		<div className='flex flex-col w-full'>
			<h1 className='text-3xl font-bold'>{t("title")}</h1>
			<ApiProduct />
		</div>
	);
};

export default ProductPage;
