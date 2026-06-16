import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "focus-ring h-11 w-full appearance-none rounded-xl border border-fuchsia-200/20 bg-violet-950/50 px-3.5 pr-10 text-sm font-medium text-white shadow-sm transition hover:border-fuchsia-200/40 [&_option]:bg-[#2a123f] [&_option]:text-white",
        className
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-white/60" />
  </div>
));
Select.displayName = "Select";

export { Select };
