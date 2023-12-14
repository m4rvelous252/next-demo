import { getServerAuthSession } from "@/server/auth";
import SignOut from "./SignOut";
import Link from "next/link";

export default async function Home() {
	const session = await getServerAuthSession();

	return (
		<div className='flex flex-col gap-2'>
			<h1 className='text-lg font-semibold'>Authorized</h1>
			<p>Hello {session?.user.firstName}</p>
			<Link href={"/product"} className=''>
				Go to Product ➡️
			</Link>
			<SignOut />
		</div>
	);
}
