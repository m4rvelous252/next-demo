import { getTranslations } from "next-intl/server";

const ProductPage = async () => {
	const t = await getTranslations("product");
	return <div>{t("title")}</div>;
};

export default ProductPage;
