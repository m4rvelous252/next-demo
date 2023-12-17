"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignIn = () => {
	return (
		<Button onClick={() => signIn()} className='px-4 py-3 rounded'>
			SignIn
		</Button>
	);
};

export default SignIn;
