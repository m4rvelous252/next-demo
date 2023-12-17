import { getServerAuthSession } from "@/server/auth";
import { ReactNode } from "react";
import QueryProvider from "./query-provider";
import SessionProvider from "./session-provider";

const ClientProvider = async ({ children }: { children: ReactNode }) => {
	const session = await getServerAuthSession();
	return (
		<SessionProvider session={session}>
			<QueryProvider>{children}</QueryProvider>
		</SessionProvider>
	);
};

export default ClientProvider;
