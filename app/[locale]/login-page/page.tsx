"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginPage = () => {
	const t = useTranslations("auth");
	const params = useSearchParams();
	const callbackUrl = params.get("callbackUrl") ?? "/";
	console.log("callbackUrl", callbackUrl);
	const form = useForm<{ username: string; password: string }>();
	return (
		<form className='p-6 bg-slate-700 rounded-lg'>
			<h1 className='text-lg font-semibold'>{t("title")}</h1>
			<div className='flex flex-col space-y-2'>
				<label htmlFor='username'>{t("username")}</label>
				<input
					id='username'
					type='text'
					{...form.register("username", { required: true })}
				/>
			</div>
			<div className='flex flex-col space-y-2'>
				<label htmlFor='password'>{t("password")}</label>
				<input
					id='password'
					type='password'
					{...form.register("password", { required: true })}
					className='text-black'
				/>
			</div>
			<button
				type='submit'
				onClick={form.handleSubmit((data) => {
					signIn("credentials", { ...data, callbackUrl });
				})}
				className='px-4 py-3 bg-slate-400 rounded mt-2'>
				{t("login")}
			</button>
		</form>
	);
};

export default LoginPage;
