import { NextAuthOptions } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProviders({
            
        }),
    ],
};