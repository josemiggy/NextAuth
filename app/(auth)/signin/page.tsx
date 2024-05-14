"use client";

import { NextPage } from "next";
import type { FormEventHandler, JSX } from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import SkeletonLoader from "./_components/SkeletonLoader";

interface SigninProps {}
const SigninPage: NextPage = (SigninProps): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validating user info
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
      {/* Signin with password
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          className="focus:outline-none px-3 py-2 border rounded-lg"
          type="email"
          placeholder="Email"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          className="focus:outline-none px-3 py-2 border rounded-lg"
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form> */}
      <SkeletonLoader />
    </div>
  );
};

export default SigninPage;
