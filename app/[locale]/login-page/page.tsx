"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginPage = () => {
	const t = useTranslations("auth");
	const params = useSearchParams();
	const callbackUrl = params.get("callbackUrl") ?? "/";
	const form = useForm<{ username: string; password: string }>();
	return (
		<form className='p-6 border w-full max-w-3xl rounded-lg flex flex-col gap-4'>
			<h1 className='text-lg font-semibold'>{t("title")}</h1>
			<div className='flex flex-col space-y-2'>
				<Label htmlFor='username'>{t("username")}</Label>
				<Input
					id='username'
					type='text'
					{...form.register("username", { required: true })}
				/>
			</div>
			<div className='flex flex-col space-y-2'>
				<Label htmlFor='password'>{t("password")}</Label>
				<Input
					id='password'
					type='password'
					{...form.register("password", { required: true })}
					className='text-black'
				/>
			</div>
			<Button
				type='submit'
				onClick={form.handleSubmit((data) => {
					signIn("credentials", { ...data, callbackUrl });
				})}
				className='px-4 py-3 bg-slate-400 rounded mt-2'>
				{t("login")}
			</Button>
		</form>
	);
};

export default LoginPage;
