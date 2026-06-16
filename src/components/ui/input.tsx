import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "focus-ring flex h-11 w-full rounded-xl border border-fuchsia-200/20 bg-violet-950/50 px-3.5 text-sm text-white shadow-sm transition placeholder:text-white/50 hover:border-fuchsia-200/40",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
