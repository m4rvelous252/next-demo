"use client";

import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

const SignOut = () => {
	const t = useTranslations("auth");
	return (
		<button
			onClick={() => signOut()}
			className='px-4 py-3 bg-slate-400 rounded'>
			{" "}
			{t("logout")}
		</button>
	);
};

export default SignOut;
