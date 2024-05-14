import { HeaderLoader, FooterLoader } from "./components";

const SkeletonLoader = () => {
  return (
    <div className="border-gray-200 flex flex-col rounded-lg border bg-white shadow-sm w-full animate-pulse">
      <HeaderLoader />
      <div className="flex h-[600px] w-full bg-slate-300" />
      <FooterLoader />
    </div>
  );
};

export default SkeletonLoader;
