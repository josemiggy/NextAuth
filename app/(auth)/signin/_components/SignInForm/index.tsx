"use client";
import axios, { AxiosError } from "axios";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";

const SignInForm = () => {
  const { push } = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post("/api/auth/login", payload);
      alert(JSON.stringify(data));
      push("/");
    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center h-80">
      <span className="text-2xl font-bold">Login to your Account</span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full max-w-md"
      >
        <Input placeholder="Email" type="text" id="email" name="email" />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          name="password"
        />
        <button className="primary-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
