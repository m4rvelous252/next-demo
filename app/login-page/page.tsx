"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginPage = () => {
	const params = useSearchParams();
	const callbackUrl = params.get("callbackUrl") ?? "/";
	console.log("callbackUrl", callbackUrl);
	const form = useForm<{ username: string; password: string }>();
	return (
		<form className='p-6 bg-slate-700 rounded-lg'>
			<h1 className='text-lg font-semibold'>Login</h1>
			<div className='flex flex-col space-y-2'>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					type='text'
					{...form.register("username", { required: true })}
				/>
			</div>
			<div className='flex flex-col space-y-2'>
				<label htmlFor='password'>Password</label>
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
				Login
			</button>
		</form>
	);
};

export default LoginPage;
