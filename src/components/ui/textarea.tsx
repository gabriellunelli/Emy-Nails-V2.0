import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "focus-ring min-h-24 w-full resize-none rounded-xl border border-fuchsia-200/20 bg-violet-950/50 px-3.5 py-3 text-sm text-white shadow-sm transition placeholder:text-white/50 hover:border-fuchsia-200/40",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
