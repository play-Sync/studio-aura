// src/components/studio/services.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const services = [
  {
    id: "brand-identity",
    icon: Palette,
    title: "Brand Identity",
    description:
      "Strategic positioning, visual identity systems, and brand guidelines that define who you are.",
    features: [
      "Logo Design",
      "Visual Systems",
      "Brand Guidelines",
    ],
  },
  {
    id: "web-design",
    icon: Monitor,
    title: "Web Design",
    description:
      "Immersive digital experiences that blend aesthetics with intuitive functionality.",
    features: [
      "UI/UX Design",
      "Responsive Design",
      "Prototyping",
    ],
  },
  {
    id: "strategy",
    icon: TrendingUp,
    title: "Strategy",
    description:
      "Research-driven insights that inform every creative decision and drive results.",
    features: [
      "Market Research",
      "Brand Strategy",
      "Positioning",
    ],
  },
  {
    id: "art-direction",
    icon: Camera,
    title: "Art Direction",
    description:
      "Visual storytelling that captures attention and communicates your unique narrative.",
    features: [
      "Photography",
      "Visual Direction",
      "Content Strategy",
    ],
  },
  {
    id: "motion-design",
    icon: Play,
    title: "Motion Design",
    description:
      "Dynamic animations that bring your brand to life across digital touchpoints.",
    features: [
      "Animation",
      "Video Production",
      "Interactive",
    ],
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging",
    description:
      "Tactile experiences that extend your brand into the physical world.",
    features: [
      "Package Design",
      "Print Design",
      "Collateral",
    ],
  },
];

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
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={fadeInUp}
            className="bg-primary p-8 md:p-10 group cursor-pointer relative overflow-hidden"
            whileHover={{
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={`/services/${service.id}`}
              className="block h-full"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-8 relative">
                  <service.icon
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
                  {service.description}
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
                <div className="flex items-center gap-2 text-accent text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
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
        <Link
          to="/contact"
          className="text-accent text-sm tracking-widest border-b border-accent/30 hover:border-accent pb-1 transition-colors inline-block"
        >
          CONTACT US
        </Link>
      </motion.div>

      {/* View All Services Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-8"
      >
        <Link
          to="/services"
          className="inline-flex items-center gap-3 text-primary-foreground text-sm tracking-widest border border-primary-foreground/20 px-8 py-4 hover:bg-primary-foreground hover:text-primary transition-all duration-500 group"
        >
          VIEW ALL SERVICES
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </SectionContainer>
  );
}
