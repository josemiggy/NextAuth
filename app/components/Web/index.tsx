"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Header, Footer, Body } from "./components";

import users from "@/data/users.json";

type User = {
  id: number;
  email: string;
  name: string;
  username: string;
  password: string;
  avatarUrl: string;
};

const Web = () => {
  // Fetch the logged-in user data
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null); // Initialize as null

  useEffect(() => {
    // Logic to fetch logged-in user data (e.g., from session, context, etc.)
    // For now, let's assume the user's email is stored in sessionStorage
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
              <div className="flex rounded-full h-10 w-10 bg-slate-300" />
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
          <button className="secondary-button">Logout</button>
        </div>
        <div className="flex flex-col gap-4 w-full h-80 p-4">
          <div className="flex flex-col gap-2">
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
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Web;
