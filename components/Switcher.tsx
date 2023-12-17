"use client";

import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";

const Switcher = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const handleChangeLocale = (locale: string) => {
		router.replace({ pathname }, { locale });
	};
	return <div>Switcher</div>;
};

export default Switcher;
