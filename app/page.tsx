import Web from "@/components/Web";
import { options } from "@/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options)
  
  return (
    <>
      {session? (
        <Web />
      ) : (
        <h1>You cannot enter</h1>
      )}
    </>
  );
}