// src/components/studio/shared/page-header.tsx

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { LabelText } from "../typography";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  gradient: string;
  backLink?: {
    href: string;
    label: string;
  };
  meta?: {
    label: string;
    value: string;
  }[];
}

export function PageHeader({
  label,
  title,
  description,
  gradient,
  backLink,
  meta,
}: PageHeaderProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        style={{ y }}
        className={`absolute inset-0 bg-linear-to-br ${gradient}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Back Link */}
      {backLink && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-24 md:top-32 left-6 md:left-12 lg:left-24 z-20"
        >
          <Link
            to={backLink.href}
            className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {backLink.label}
          </Link>
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-16 md:pb-24"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LabelText className="text-accent">
              {label}
            </LabelText>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extralight text-background mt-4 leading-tight"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-background/70 text-lg md:text-xl font-light max-w-2xl mt-6 leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {meta && meta.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-8 md:gap-12 mt-10"
            >
              {meta.map((item) => (
                <div key={item.label}>
                  <p className="text-background/50 text-xs tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-background text-lg font-light">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
