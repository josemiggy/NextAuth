import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import users from "@/data/users.json";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // additional logics
        if (email !== "jose@jetpak.so" && password !== "1234") {
          throw new Error("Invalid Credentials");
        }
        return { id: "1234", name: "Jose", email: "jose@jetpak.so" };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);