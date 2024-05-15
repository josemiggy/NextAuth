import { Input } from "@/components/ui/Input";

const SignInForm = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center h-80">
      <span className="text-2xl font-bold">Login to your Account</span>
      <div className="flex flex-col gap-2 w-full max-w-md">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <button className="primary-button">Login</button>
      </div>
    </div>
  );
};

export default SignInForm;
