import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { SectionContainer } from "./layout";
import { SectionTitle, ItalicText } from "./typography";
import {
  AnimatedDiv,
  StaggerContainer,
  fadeInUp,
  scaleIn,
} from "./animations";
import {
  Award,
  Users,
  Calendar,
  Briefcase,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: "150+",
    label: "Projects Completed",
  },
  { icon: Users, number: "12", label: "Team Members" },
  {
    icon: Calendar,
    number: "8",
    label: "Years Experience",
  },
  { icon: Award, number: "40+", label: "Awards Won" },
];

export function About() {
  return (
    <SectionContainer id="about" variant="cream">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <div>
          <AnimatedDiv>
            <SectionTitle
              label="OUR PHILOSOPHY"
              title={
                <>
                  Design is the silent
                  <br />
                  <ItalicText>ambassador</ItalicText> of
                  your brand
                </>
              }
            />
          </AnimatedDiv>

          <AnimatedDiv delay={0.1}>
            <Separator className="w-24 bg-accent h-px my-8" />
          </AnimatedDiv>

          <AnimatedDiv delay={0.2}>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
              We believe in the power of thoughtful design
              to transform businesses. Every pixel, every
              word, every interaction is an opportunity to
              connect with your audience on a deeper level.
            </p>
          </AnimatedDiv>

          <AnimatedDiv delay={0.3}>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Our approach combines strategic thinking with
              creative excellence, resulting in brands that
              are not only beautiful but meaningful and
              effective.
            </p>
          </AnimatedDiv>

          {/* Philosophy Points */}
          <AnimatedDiv delay={0.4}>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                "Strategy First",
                "Detail Obsessed",
                "User Centered",
                "Results Driven",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm tracking-widest text-foreground">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedDiv>
        </div>

        {/* Visual Element */}
        <AnimatedDiv
          variants={scaleIn}
          className="relative"
        >
          <div className="aspect-4/5 bg-foreground relative overflow-hidden group">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-accent/30 via-transparent to-accent/10" />

            {/* Image Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-foreground to-transparent">
              <p className="text-background text-sm tracking-widest font-light">
                SINCE 2018
              </p>
              <p className="text-background/60 text-sm mt-2">
                Brooklyn, New York
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-background text-sm tracking-widest border border-background/30 px-6 py-3">
                OUR STORY
              </span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent" />
          <div className="absolute -top-6 -left-6 w-20 h-20 border border-accent/30" />
        </AnimatedDiv>
      </div>

      {/* Stats Section */}
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="text-center group"
          >
            <stat.icon className="w-6 h-6 mx-auto mb-4 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
            <p className="text-4xl md:text-5xl font-extralight text-foreground">
              {stat.number}
            </p>
            <p className="text-muted-foreground text-xs tracking-widest mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </StaggerContainer>
    </SectionContainer>
  );
}
