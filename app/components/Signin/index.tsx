import Link from "next/link";
import SkeletonLoader from "../SkeletonLoader";

const SigninContents = () => {
  return (
    <div className="flex flex-col max-w-3xl md:mx-auto w-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Signin</h1>
        <form className="flex flex-col gap-2">
          <Link
            href="/signin"
            className="px-3 py-2 flex items-center justify-center gap-2 text-sm rounded-lg border border-gray-100"
          >
            Go to signin
          </Link>
        </form>
      </div>
      <SkeletonLoader />
    </div>
  );
};

export default SigninContents;
