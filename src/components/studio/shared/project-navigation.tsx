// src/components/studio/shared/project-navigation.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectNavigationProps {
  prevProject?: {
    id: string;
    title: string;
    href: string;
  };
  nextProject?: {
    id: string;
    title: string;
    href: string;
  };
}

export function ProjectNavigation({
  prevProject,
  nextProject,
}: ProjectNavigationProps) {
  return (
    <section className="border-t border-border">
      <div className="grid md:grid-cols-2">
        {/* Previous Project */}
        <div
          className={`${
            !prevProject ? "hidden md:block" : ""
          }`}
        >
          {prevProject ? (
            <Link
              to={prevProject.href}
              className="block group"
            >
              <motion.div
                className="px-6 md:px-12 lg:px-24 py-12 md:py-16 border-r border-border hover:bg-secondary/50 transition-colors"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 text-muted-foreground text-sm tracking-widest mb-3">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  PREVIOUS PROJECT
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-accent transition-colors">
                  {prevProject.title}
                </h3>
              </motion.div>
            </Link>
          ) : (
            <div className="px-6 md:px-12 lg:px-24 py-12 md:py-16 border-r border-border" />
          )}
        </div>

        {/* Next Project */}
        <div
          className={`${
            !nextProject ? "hidden md:block" : ""
          }`}
        >
          {nextProject ? (
            <Link
              to={nextProject.href}
              className="block group"
            >
              <motion.div
                className="px-6 md:px-12 lg:px-24 py-12 md:py-16 text-right hover:bg-secondary/50 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-end gap-2 text-muted-foreground text-sm tracking-widest mb-3">
                  NEXT PROJECT
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-accent transition-colors">
                  {nextProject.title}
                </h3>
              </motion.div>
            </Link>
          ) : (
            <div className="px-6 md:px-12 lg:px-24 py-12 md:py-16" />
          )}
        </div>
      </div>
    </section>
  );
}
