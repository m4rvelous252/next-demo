"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

const SignOut = () => {
	const t = useTranslations("auth");
	return (
		<Button
			onClick={() => signOut()}
			type='button'
			className='px-4 py-3 rounded w-fit'>
			{" "}
			{t("logout")}
		</Button>
	);
};

export default SignOut;
