import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

// Section Title
interface SectionTitleProps {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export function SectionTitle({
  label,
  title,
  description,
  align = "left",
  className = "",
  dark = false,
}: SectionTitleProps) {
  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div
      className={cn(
        "max-w-3xl",
        alignStyles[align],
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "tracking-ultra text-xs font-medium mb-6",
            dark ? "text-accent" : "text-accent"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight",
          dark
            ? "text-primary-foreground"
            : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-lg font-light leading-relaxed",
            dark
              ? "text-primary-foreground/70"
              : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// Display Heading
interface DisplayHeadingProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function DisplayHeading({
  children,
  className = "",
  size = "lg",
}: DisplayHeadingProps) {
  const sizeStyles = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl lg:text-7xl",
    xl: "text-6xl md:text-7xl lg:text-8xl",
  };

  return (
    <h1
      className={cn(
        "font-extralight leading-[1.1] tracking-tight text-foreground",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </h1>
  );
}

// Italic Text
export function ItalicText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("italic font-light", className)}>
      {children}
    </span>
  );
}

// Label Text
export function LabelText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "tracking-ultra text-xs font-medium text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
