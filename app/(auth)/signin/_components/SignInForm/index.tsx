"use client";
import axios, { AxiosError } from "axios";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const { push } = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    // Store the email in sessionStorage
    sessionStorage.setItem("loggedInEmail", email);
  
    try {
      // Sign in using NextAuth.js signIn function
      const result = await signIn("credentials", {
        redirect: false, // Do not redirect on success, handle it here
        email,
        password,
      });
  
      // Check if there is no error in the result
      if (!result?.error) {
        // Sign-in successful, redirect to desired location
        push("/");
        return; // Exit the function after redirection
      }
  
      // Handle sign-in error
      alert(result.error);
    } catch (error: any) {
      // Handle other errors
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
