// src/pages/work/index.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/studio/navigation";
import { Footer } from "@/components/studio/footer";
import { PageHeader } from "@/components/studio/shared/page-header";
import { SectionContainer } from "@/components/studio/layout";
import { CTASection } from "@/components/studio/shared/cta-section";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

import { ArrowUpRight } from "lucide-react";
import { getCaseStudiesByCategory } from "@/data/data";

const categories = ["all", "branding", "web", "strategy"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] =
    useState("all");
  const filteredStudies =
    getCaseStudiesByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHeader
        label="OUR WORK"
        title="Case studies"
        description="Explore our portfolio of brand transformations, digital experiences, and strategic initiatives."
        gradient="from-foreground to-foreground/80"
      />

      {/* Filter Tabs */}
      <SectionContainer
        size="small"
        className="-mt-8 relative z-10"
      >
        <div className="bg-background border border-border p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            Showing{" "}
            <span className="text-foreground font-medium">
              {filteredStudies.length}
            </span>{" "}
            {filteredStudies.length === 1
              ? "project"
              : "projects"}
          </p>

          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
          >
            <TabsList className="bg-secondary border border-border rounded-none p-1 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-none px-5 py-2.5 text-xs tracking-widest uppercase data-[state=active]:bg-foreground data-[state=active]:text-background transition-all duration-300"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </SectionContainer>

      {/* Case Studies Grid */}
      <SectionContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={
                  index === 0 ? "md:col-span-2" : ""
                }
              >
                <Link
                  to={`/work/${study.id}`}
                  className="block group"
                >
                  <Card className="rounded-none border-0 bg-transparent overflow-hidden">
                    <CardContent className="p-0">
                      {/* Image */}
                      <div
                        className={`relative overflow-hidden ${
                          index === 0
                            ? "aspect-21/9"
                            : "aspect-4/3"
                        }`}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-linear-to-br ${study.heroImage}`}
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                          }}
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500" />

                        {/* Category Badge */}
                        <div className="absolute top-6 left-6 z-10">
                          <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs tracking-widest px-4 py-2">
                            {study.category.toUpperCase()}
                          </span>
                        </div>

                        {/* Year Badge */}
                        <div className="absolute top-6 right-6 z-10">
                          <span className="text-background/80 text-sm">
                            {study.year}
                          </span>
                        </div>

                        {/* Hover Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-background text-lg font-light leading-relaxed mb-4 max-w-xl">
                            {study.shortDescription}
                          </p>
                          <div className="flex items-center gap-4">
                            {study.results
                              .slice(0, 2)
                              .map((result) => (
                                <div
                                  key={result.label}
                                  className="text-background/80"
                                >
                                  <span className="text-accent text-lg font-light">
                                    {result.metric}
                                  </span>
                                  <span className="text-xs ml-2">
                                    {result.label}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-6 flex items-start justify-between px-8">
                        <div>
                          <h2
                            className={`font-light text-foreground group-hover:text-accent transition-colors ${
                              index === 0
                                ? "text-3xl md:text-4xl"
                                : "text-2xl"
                            }`}
                          >
                            {study.title}
                          </h2>
                          <p className="text-muted-foreground text-sm mt-2">
                            {study.client}
                          </p>
                        </div>
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </SectionContainer>

      <CTASection
        title="Have a project in mind?"
        description="We'd love to hear about your vision and explore how we can bring it to life."
        primaryAction={{
          label: "START A PROJECT",
          href: "/contact",
        }}
        secondaryAction={{
          label: "VIEW SERVICES",
          href: "/services",
        }}
        variant="dark"
      />

      <Footer />
    </div>
  );
}
