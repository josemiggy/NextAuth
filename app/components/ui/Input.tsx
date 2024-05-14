import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative flex h-10 w-full items-center justify-between gap-2 rounded-lg">
        <input
          type={type}
          className={cn(
            "relative flex w-full rounded-lg border bg-transparent px-3 py-2 text-sm transition-colors duration-300 ease-in-out focus-within:border-[#2865FE] focus:border-[#2865FE] focus:outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
