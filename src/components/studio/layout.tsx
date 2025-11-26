import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Section Container
interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "cream";
  size?: "default" | "large" | "small";
}

export function SectionContainer({
  children,
  className = "",
  id = "",
  variant = "default",
  size = "default",
}: SectionContainerProps) {
  const variantStyles = {
    default: "bg-background",
    dark: "bg-primary text-primary-foreground",
    cream: "bg-secondary",
  };

  const sizeStyles = {
    default: "py-20 md:py-32",
    large: "py-28 md:py-40",
    small: "py-12 md:py-20",
  };

  return (
    <section
      id={id}
      className={cn(
        "px-6 md:px-12 lg:px-24",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

// Content Container
interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

export function ContentContainer({
  children,
  className = "",
  maxWidth = "xl",
}: ContentContainerProps) {
  const maxWidthStyles = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto",
        maxWidthStyles[maxWidth],
        className
      )}
    >
      {children}
    </div>
  );
}

// Grid Container
interface GridContainerProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: "sm" | "md" | "lg" | "xl";
}

export function GridContainer({
  children,
  className = "",
  cols = 3,
  gap = "lg",
}: GridContainerProps) {
  const colStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  const gapStyles = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return (
    <div
      className={cn(
        "grid",
        colStyles[cols],
        gapStyles[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
