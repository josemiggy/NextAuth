"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Header, Footer, Body } from "./components";

const Web = () => {
  const { push } = useRouter();
  const [user, setUser] = useState<any>(null);

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
      <div className="border-gray-200 flex flex-col rounded-lg border bg-white shadow-sm max-w-3xl w-full">
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex rounded-full h-10 w-10 bg-slate-300" />
              <div className="flex flex-col">
                <span className="text-base font-semibold">Jose Miguel</span>
                <span className="text-sm text-gray">@Username</span>
              </div>
            </div>
          </div>
          <button className="secondary-button">Logout</button>
        </div>
        <div className="flex flex-col gap-4 w-full h-80 p-4">
          <span className="text-2xl font-bold">User Information</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray">Email:</span>
              <span className="text-sm font-bold">jose@jetpak.so</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray">User ID:</span>
              <span className="text-sm font-bold">1234</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray">Client ID:</span>
              <span className="text-sm font-bold">1234</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Web;
