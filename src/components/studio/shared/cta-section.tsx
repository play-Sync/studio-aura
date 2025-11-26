// src/components/studio/shared/cta-section.tsx

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: "default" | "dark";
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`px-6 md:px-12 lg:px-24 py-24 md:py-32 ${
        isDark ? "bg-foreground" : "bg-secondary"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-5xl font-extralight leading-tight ${
            isDark ? "text-background" : "text-foreground"
          }`}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`mt-6 text-lg font-light ${
            isDark
              ? "text-background/70"
              : "text-muted-foreground"
          }`}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link to={primaryAction.href}>
            <Button
              className={`rounded-none px-10 py-6 text-sm tracking-widest transition-all duration-500 group ${
                isDark
                  ? "bg-background text-foreground hover:bg-accent hover:text-foreground"
                  : "bg-foreground text-background hover:bg-accent"
              }`}
            >
              {primaryAction.label}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {secondaryAction && (
            <Link to={secondaryAction.href}>
              <Button
                variant="ghost"
                className={`rounded-none px-10 py-6 text-sm tracking-widest ${
                  isDark
                    ? "text-background/70 hover:text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {secondaryAction.label}
              </Button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
