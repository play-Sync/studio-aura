import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { SectionContainer } from "./layout";
import { SectionTitle } from "./typography";
import { AnimatedDiv } from "./animations";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/data";
import { Link } from "react-router-dom";

// const caseStudies = [
//   {
//     id: 1,
//     title: "Meridian Wellness",
//     category: "branding",
//     description:
//       "Complete brand identity for a luxury wellness retreat",
//     year: "2024",
//     gradient:
//       "from-violet-500 via-purple-500 to-fuchsia-500",
//     results: "+180% Brand Recognition",
//   },
//   {
//     id: 2,
//     title: "Finch & Sparrow",
//     category: "web",
//     description:
//       "E-commerce experience for artisanal homeware brand",
//     year: "2024",
//     gradient: "from-rose-400 via-pink-500 to-red-500",
//     results: "+250% Online Sales",
//   },
//   {
//     id: 3,
//     title: "Atlas Ventures",
//     category: "strategy",
//     description:
//       "Strategic repositioning for venture capital firm",
//     year: "2023",
//     gradient: "from-cyan-400 via-blue-500 to-indigo-500",
//     results: "12 New Partnerships",
//   },
//   {
//     id: 4,
//     title: "Ember Studio",
//     category: "branding",
//     description:
//       "Visual identity for contemporary ceramics studio",
//     year: "2023",
//     gradient: "from-emerald-400 via-teal-500 to-cyan-500",
//     results: "+95% Social Growth",
//   },
// ];

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredStudies =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter(
          (study) => study.category === activeTab
        );

  return (
    <SectionContainer id="work">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <AnimatedDiv>
          <SectionTitle
            label="SELECTED WORK"
            title="Case studies"
            description="Explore our latest projects and see how we've helped brands transform their presence."
          />
        </AnimatedDiv>

        <AnimatedDiv delay={0.2}>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="bg-secondary/50 border border-border rounded-none p-1 h-auto">
              {["all", "branding", "web", "strategy"].map(
                (tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="rounded-none px-5 py-2.5 text-xs tracking-widest uppercase data-[state=active]:bg-foreground data-[state=active]:text-background transition-all duration-300"
                  >
                    {tab}
                  </TabsTrigger>
                )
              )}
            </TabsList>
          </Tabs>
        </AnimatedDiv>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View All CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-16"
      >
        <button className="inline-flex items-center gap-3 text-foreground text-sm tracking-widest border border-foreground/20 px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500 group">
          VIEW ALL PROJECTS
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </SectionContainer>
  );
}

interface CaseStudyCardProps {
  study: (typeof caseStudies)[0];
  index: number;
}

function CaseStudyCard({
  study,
  index,
}: CaseStudyCardProps) {
  return (
    <Link to={`/work/${study.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card className="rounded-none border-0 bg-transparent overflow-hidden group cursor-pointer">
          <CardContent className="p-0">
            {/* Image Container */}
            <div className="relative aspect-4/3 overflow-hidden bg-secondary">
              {/* Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br ${study.heroImage}`}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-500" />

              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs tracking-widest px-4 py-2">
                  {study.category.toUpperCase()}
                </span>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-background text-lg font-light leading-relaxed mb-4">
                  {study.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-accent text-sm tracking-widest">
                    {study.results[0].metric}{" "}
                    {study.results[0].label}
                  </span>
                  <Link to={`/work/${study.id}`}>
                    <div className="flex items-center gap-2 text-background text-sm tracking-widest">
                      VIEW PROJECT
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-6 px-8 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm tracking-widest mt-1">
                  {study.category.toUpperCase()}
                </p>
              </div>
              <p className="text-muted-foreground text-sm">
                {study.year}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
