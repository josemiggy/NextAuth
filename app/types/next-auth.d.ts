import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email: string;
      name: string;
      username: string;
      password: string;
      avatarUrl: string;
      accessToken: string,
    };
  }
}
