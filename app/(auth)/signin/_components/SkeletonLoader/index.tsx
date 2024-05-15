import { HeaderLoader, FooterLoader } from "./components";

import SignInForm from "../SignInForm";

const SkeletonLoader = () => {
  return (
    <div className="border-gray-200 flex flex-col rounded-lg border bg-white shadow-sm max-w-3xl w-full">
      <HeaderLoader />
      {/* <div className="flex h-[600px] w-full bg-slate-300" /> */}
      <SignInForm />
      <FooterLoader />
    </div>
  );
};

export default SkeletonLoader;
