import { HeaderLoader, FooterLoader } from "./components";
import { Input } from "@/components/ui/Input";

const SkeletonLoader = () => {
  return (
    <div className="border-gray-200 flex flex-col rounded-lg border bg-white shadow-sm max-w-3xl w-full">
      <HeaderLoader />
      {/* <div className="flex h-[600px] w-full bg-slate-300" /> */}
      <div className="flex flex-col gap-4 w-full items-center justify-center h-80">
        <span className="text-2xl font-bold">Login to your Account</span>
        <div className="flex flex-col gap-2 w-full max-w-md">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <button className="primary-button">Login</button>
        </div>
      </div>
      <FooterLoader />
    </div>
  );
};

export default SkeletonLoader;
