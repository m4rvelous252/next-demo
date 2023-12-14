"use client";

import { signOut } from "next-auth/react";

const SignOut = () => {
	return (
		<button
			onClick={() => signOut()}
			className='px-4 py-3 bg-slate-400 rounded'>
			{" "}
			Sign out
		</button>
	);
};

export default SignOut;
