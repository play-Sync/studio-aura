// src/components/studio/shared/related-items.tsx

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "../layout";
import { SectionTitle } from "../typography";

interface RelatedItem {
  id: string;
  title: string;
  description: string;
  category?: string;
  gradient: string;
  href: string;
}

interface RelatedItemsProps {
  label: string;
  title: string;
  items: RelatedItem[];
  variant?: "default" | "dark";
}

export function RelatedItems({
  label,
  title,
  items,
  variant = "default",
}: RelatedItemsProps) {
  const isDark = variant === "dark";

  return (
    <SectionContainer variant={isDark ? "dark" : "default"}>
      <SectionTitle
        label={label}
        title={title}
        dark={isDark}
        className="mb-12"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <Link to={item.href}>
              <Card className="rounded-none border-0 bg-transparent overflow-hidden group cursor-pointer h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-linear-to-br ${item.gradient}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500" />

                    {item.category && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs tracking-widest px-3 py-1.5">
                          {item.category.toUpperCase()}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-background text-sm tracking-widest border border-background/30 px-6 py-3 flex items-center gap-2">
                        VIEW
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="pt-5 px-4 flex flex-col justify-between">
                    <h3
                      className={`text-xl font-light group-hover:text-accent transition-colors ${
                        isDark
                          ? "text-background"
                          : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm mt-2 line-clamp-2 ${
                        isDark
                          ? "text-background/60"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
