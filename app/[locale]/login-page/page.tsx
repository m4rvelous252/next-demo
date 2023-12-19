"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import LoginForm from "./LoginForm";

const LoginPage = () => {
	const params = useSearchParams();
	const callbackUrl = params.get("callbackUrl") ?? "/";
	const error = params.get("error") ?? undefined;
	const onSubmit = (data: { username: string; password: string }) => {
		signIn("credentials", {
			username: data.username,
			password: data.password,
			callbackUrl: callbackUrl,
		});
	};
	return <LoginForm onSubmit={onSubmit} error={error} />;
};

export default LoginPage;
