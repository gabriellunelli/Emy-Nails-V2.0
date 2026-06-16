"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-fuchsia-500 text-white shadow-glow hover:-translate-y-0.5 hover:bg-fuchsia-400",
        secondary:
          "bg-violet-900/70 text-white hover:-translate-y-0.5 hover:bg-violet-800/80",
        outline:
          "border border-fuchsia-200/20 bg-violet-950/40 text-white backdrop-blur hover:-translate-y-0.5 hover:border-fuchsia-200/40 hover:bg-violet-900/50",
        ghost: "text-white hover:bg-white/10",
        dark: "bg-violet-950 text-white hover:-translate-y-0.5 hover:bg-violet-900",
        destructive: "bg-destructive text-destructive-foreground hover:bg-rose-600"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-7",
        icon: "size-10 rounded-xl p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
