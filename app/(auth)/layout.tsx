import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full w-full">
      <main className="flex h-full w-full">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
