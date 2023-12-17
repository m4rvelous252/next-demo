import { getTranslations } from "next-intl/server";
import ApiProduct from "./ApiProduct";

const ProductPage = async () => {
	const t = await getTranslations("product");
	return (
		<div className='flex flex-col w-full gap-8'>
			<h1 className='text-3xl font-bold'>{t("title")}</h1>
			<ApiProduct />
		</div>
	);
};

export default ProductPage;
