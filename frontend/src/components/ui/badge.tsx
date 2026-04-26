import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "green" | "orange" | "gray";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: "bg-[#f2f9ff] text-[#097fe8]",
  green: "bg-[#f0fdf4] text-[#15803d]",
  orange: "bg-[#fff7ed] text-[#c2410c]",
  gray: "bg-[#f6f5f4] text-[#615d59]",
};

export function Badge({ children, variant = "gray", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-[2px] text-[11px] font-semibold leading-[1.4] tracking-[0.1px]",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
