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
      <SkeletonLoader />
    </div>
  );
};

export default SigninPage;
