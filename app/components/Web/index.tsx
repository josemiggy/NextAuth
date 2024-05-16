"use client";
import { useEffect, useState } from "react";
import { Footer } from "./components";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import users from "@/data/users.json";

type User = {
  id: number;
  email: string;
  name: string;
  username: string;
  avatarUrl: string;
};

const Web = () => {
  const { data: session } = useSession();
  console.log({ session });

  // fetching loggedin User
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    // getting users creds from session storage
    const loggedInEmail = sessionStorage.getItem("loggedInEmail");
    console.log("Logged-in Email:", loggedInEmail);
    if (loggedInEmail) {
      const user = users.find((u) => u.email === loggedInEmail);
      if (user) {
        setLoggedInUser(user);
      }
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
      <div className="border-gray-200 flex flex-col rounded-lg border bg-white shadow-sm max-w-3xl w-full">
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src={loggedInUser ? loggedInUser.avatarUrl : "/next.svg"}
                alt="Profile"
                width={40}
                height={40}
                priority
                quality={100}
                className="rounded-full h-10 w-10"
              />
              <div className="flex flex-col">
                {/* Display logged-in user's name and username */}
                <span className="text-base font-semibold">
                  {loggedInUser ? loggedInUser.name : "Loading..."}
                </span>
                <span className="text-sm text-gray">
                  @{loggedInUser ? loggedInUser.username : "Loading..."}
                </span>
              </div>
            </div>
          </div>
          {session?.user && (
            <button onClick={() => signIn()} className="secondary-button">
              Logout
            </button>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full h-40 p-4">
          {/* <div className="flex flex-col gap-2">
            {loggedInUser ? (
              <>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray">Email:</span>
                  <span className="text-sm font-bold">
                    {loggedInUser.email}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray">User ID:</span>
                  <span className="text-sm font-bold">{loggedInUser.id}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray">Client ID:</span>
                  <span className="text-sm font-bold">
                    {loggedInUser.clientId}
                  </span>
                </div>
              </>
            ) : (
              <span>Loading...</span>
            )}
          </div> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Web;
