import { motion } from "framer-motion";
import { SectionContainer } from "./layout";
import { SectionTitle } from "./typography";
import { StaggerContainer, fadeInUp } from "./animations";
import {
  Palette,
  Monitor,
  TrendingUp,
  Camera,
  Play,
  Package,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/data";

const iconMap: Record<
  string,
  React.ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>
> = {
  Palette,
  Monitor,
  TrendingUp,
  Camera,
  Play,
  Package,
};

// const services = [
//   {
//     icon: Palette,
//     title: "Brand Identity",
//     description:
//       "Strategic positioning, visual identity systems, and brand guidelines that define who you are.",
//     features: [
//       "Logo Design",
//       "Visual Systems",
//       "Brand Guidelines",
//     ],
//   },
//   {
//     icon: Monitor,
//     title: "Web Design",
//     description:
//       "Immersive digital experiences that blend aesthetics with intuitive functionality.",
//     features: [
//       "UI/UX Design",
//       "Responsive Design",
//       "Prototyping",
//     ],
//   },
//   {
//     icon: TrendingUp,
//     title: "Strategy",
//     description:
//       "Research-driven insights that inform every creative decision and drive results.",
//     features: [
//       "Market Research",
//       "Brand Strategy",
//       "Positioning",
//     ],
//   },
//   {
//     icon: Camera,
//     title: "Art Direction",
//     description:
//       "Visual storytelling that captures attention and communicates your unique narrative.",
//     features: [
//       "Photography",
//       "Visual Direction",
//       "Content Strategy",
//     ],
//   },
//   {
//     icon: Play,
//     title: "Motion Design",
//     description:
//       "Dynamic animations that bring your brand to life across digital touchpoints.",
//     features: [
//       "Animation",
//       "Video Production",
//       "Interactive",
//     ],
//   },
//   {
//     icon: Package,
//     title: "Packaging",
//     description:
//       "Tactile experiences that extend your brand into the physical world.",
//     features: [
//       "Package Design",
//       "Print Design",
//       "Collateral",
//     ],
//   },
// ];

export function Services() {
  return (
    <SectionContainer id="services" variant="dark">
      <SectionTitle
        label="WHAT WE DO"
        title={
          <>
            Comprehensive creative
            <br />
            <span className="italic font-light">
              services
            </span>
          </>
        }
        align="center"
        dark
        className="mb-20"
      />

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="bg-primary p-8 md:p-10 group cursor-pointer relative overflow-hidden"
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-8 relative">
                  <Icon
                    className="w-10 h-10 text-accent transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1}
                  />
                  <div className="absolute -inset-4 border border-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-light text-primary-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/60 font-light leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-primary-foreground/40 text-sm"
                    >
                      <div className="w-1 h-1 bg-accent rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link to={`/services/${service.id}`}>
                  <motion.div className="flex items-center gap-2 text-accent text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    LEARN MORE
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </StaggerContainer>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-primary-foreground/60 text-sm mb-6">
          Looking for something specific? We offer custom
          solutions.
        </p>
        <button
          className="text-accent text-sm tracking-widest border-b border-accent/30 hover:border-accent pb-1 transition-colors"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          CONTACT US
        </button>
      </motion.div>
    </SectionContainer>
  );
}
