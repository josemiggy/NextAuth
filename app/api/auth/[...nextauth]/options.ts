import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import users from "@/data/users.json";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null; // Return null if credentials are not provided
        }
        // Find the user by the provided username
        const user = users.find((u) => u.email === credentials.email);
        // Check if the user exists and if the password matches
        if (user && user.password === credentials.password) {
          return {
            id: user.id.toString(),
            email: user.username,
            name: user.name,
            password: user.password,
            avatarURL: user.avatarUrl,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // this token is coming from the returned jwt
      session.user = token as any;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};
