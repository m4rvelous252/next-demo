import { getTranslations } from "next-intl/server";
import NewProduct from "./NewProduct";

const AddProductPage = async () => {
	const t = await getTranslations("addProduct");
	return (
		<div className='flex flex-col w-full gap-8'>
			<h1 className='text-3xl font-bold'>{t("title")}</h1>
			<NewProduct />
		</div>
	);
};
export default AddProductPage;
