import { useTranslations } from "next-intl";

const useAuthTranslation = () => {
	const t = useTranslations("auth");

	return t;
};
export default useAuthTranslation;
