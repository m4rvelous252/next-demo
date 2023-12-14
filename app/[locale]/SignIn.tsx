"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
	return (
		<button onClick={() => signIn()} className='px-4 py-3 bg-slate-400 rounded'>
			SignIn
		</button>
	);
};

export default SignIn;
