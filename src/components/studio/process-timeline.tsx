import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionContainer } from "./layout";
import { SectionTitle } from "./typography";
import {
  Search,
  Lightbulb,
  Pencil,
  RefreshCw,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your brand, audience, and objectives through research and collaborative workshops.",
    icon: Search,
    duration: "1-2 weeks",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Armed with insights, we develop a comprehensive strategy that guides every creative decision.",
    icon: Lightbulb,
    duration: "1-2 weeks",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our team crafts thoughtful, beautiful design solutions that bring your brand vision to life.",
    icon: Pencil,
    duration: "3-4 weeks",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Through iteration and feedback, we polish every detail until the work exceeds expectations.",
    icon: RefreshCw,
    duration: "1-2 weeks",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We ensure a flawless launch and provide ongoing support for continued success.",
    icon: Rocket,
    duration: "1 week",
  },
];

export function ProcessTimeline() {
  return (
    <SectionContainer id="process" variant="dark">
      <SectionTitle
        label="HOW WE WORK"
        title={
          <>
            Our proven
            <br />
            <span className="italic font-light">
              process
            </span>
          </>
        }
        description="A structured approach that ensures exceptional results every time."
        align="center"
        dark
        className="mb-20"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 md:-translate-x-px" />

        {steps.map((step, index) => (
          <TimelineStep
            key={step.number}
            step={step}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

interface TimelineStepProps {
  step: (typeof steps)[0];
  index: number;
}

function TimelineStep({ step, index }: TimelineStepProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 pl-20 md:pl-0 ${
          isEven ? "md:text-right md:pr-16" : "md:pl-16"
        }`}
      >
        <div
          className={`inline-block ${
            isEven ? "md:text-right" : "md:text-left"
          }`}
        >
          {/* Step Number & Duration */}
          <div
            className={`flex items-center gap-4 mb-3 ${
              isEven ? "md:justify-end" : ""
            }`}
          >
            <span className="text-accent text-sm tracking-widest">
              {step.number}
            </span>
            <span className="text-primary-foreground/40 text-xs tracking-widest">
              {step.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-light text-primary-foreground mb-4">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-primary-foreground/60 font-light leading-relaxed max-w-md">
            {step.description}
          </p>
        </div>
      </div>

      {/* Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.15 + 0.3,
        }}
        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-16 h-16 bg-primary border border-accent/30 flex items-center justify-center group hover:border-accent transition-colors duration-300">
          <step.icon
            className="w-6 h-6 text-accent"
            strokeWidth={1}
          />
        </div>
      </motion.div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
