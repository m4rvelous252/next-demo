"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

const SignOut = () => {
	const t = useTranslations("auth");
	return (
		<Button
			onClick={() => signOut()}
			className='px-4 py-3 bg-slate-400 rounded'>
			{" "}
			{t("logout")}
		</Button>
	);
};

export default SignOut;
