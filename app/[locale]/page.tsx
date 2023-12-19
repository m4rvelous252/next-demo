import { getServerAuthSession } from "@/server/auth";
import SignOut from "./SignOut";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

export default async function Home() {
	const session = await getServerAuthSession();
	const t = await getTranslations();

	return (
		<div className='flex flex-col gap-2 w-full'>
			<h1 className='text-3xl font-bold'>{t("authorized")}</h1>
			<p className='text-xl'>
				{t("greeting")} {session?.user.firstName}
			</p>
			<Button asChild className='w-fit' variant={"outline"}>
				<Link href={"/product"}>{t("linkToProduct")} ➡️</Link>
			</Button>
			<SignOut />
		</div>
	);
}
