"use client";

import Web from "@/components/Web";
// import { options } from "@/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
export default function Home() {
  // const data = await getServerSession(options);
  // const { data } = useSession();

  return (
    <main className="flex flex-col w-full items-center justify-center h-full">
      <div className="flex flex-col gap-4 w-full">
        <Web />
        {/* {JSON.stringify(data)} */}
      </div>
    </main>
  );
}
