import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: User;
	}
}

export type User = {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
};

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text", placeholder: "username" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const res = await fetch("https://dummyjson.com/auth/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: credentials?.username,
						password: credentials?.password,
						// expiresInMins: 60, // optional
					}),
				});
				const user = await res.json();
				if (user.message) return null;
				if (user) return user;
				return null;
			},
		}),
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) token.user = user;
			return token;
		},
		session: async ({ session, token }) => {
			if (token.user) {
				session.user = token.user as User;
			}
			return session;
		},
	},
	pages: {
		signIn: "/login-page",
	},
} satisfies NextAuthOptions;

export const getServerAuthSession = () => getServerSession(authOptions);
