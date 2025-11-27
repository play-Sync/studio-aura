import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/studio/navigation";
import { Footer } from "@/components/studio/footer";
import { PageHeader } from "@/components/studio/shared/page-header";
import { SectionContainer } from "@/components/studio/layout";
import { CTASection } from "@/components/studio/shared/cta-section";

import {
  ArrowRight,
  Palette,
  Monitor,
  TrendingUp,
  Camera,
  Play,
  Package,
} from "lucide-react";
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHeader
        label="OUR SERVICES"
        title="What we do"
        description="Comprehensive creative services to transform your brand and drive business growth."
        gradient="from-primary via-primary/90 to-primary/80"
      />

      {/* Services Grid */}
      <SectionContainer className="-mt-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map(
            (
              service: {
                id: string;
                title: string;
                shortDescription: string;
                icon: string;
                features: string[];
                duration: string;
              },
              index: number
            ) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <Link
                    to={`/services/${service.id}`}
                    className="block group"
                  >
                    <div className="bg-background border border-border p-8 md:p-10 hover:border-accent/50 hover:shadow-lg transition-all duration-500 h-full">
                      {/* Icon */}
                      <div className="mb-6">
                        {Icon && (
                          <div className="w-14 h-14 border border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                            <Icon
                              className="w-6 h-6 text-accent"
                              strokeWidth={1}
                            />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <h2 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-accent transition-colors mb-4">
                        {service.title}
                      </h2>

                      <p className="text-muted-foreground font-light leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.features
                          .slice(0, 4)
                          .map((feature) => (
                            <span
                              key={feature}
                              className="text-xs tracking-widest text-muted-foreground border border-border px-3 py-1.5 bg-secondary/50"
                            >
                              {feature}
                            </span>
                          ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-border">
                        <span className="text-sm text-accent tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                          LEARN MORE
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            }
          )}
        </div>
      </SectionContainer>

      {/* Process Overview */}
      <SectionContainer variant="dark">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent tracking-[0.4em] text-xs mb-4"
          >
            OUR APPROACH
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extralight text-background"
          >
            Every project follows our proven process
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Discovery",
            "Strategy",
            "Design",
            "Delivery",
          ].map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="text-center group"
            >
              <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mx-auto mb-4 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                <span className="text-accent text-xl font-light">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-light text-background mb-2">
                {step}
              </h3>
              <p className="text-background/60 text-sm font-light">
                {index === 0 &&
                  "Understanding your needs and goals"}
                {index === 1 &&
                  "Defining the strategic direction"}
                {index === 2 &&
                  "Crafting the creative solution"}
                {index === 3 && "Launching and supporting"}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Why Choose Us */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent tracking-[0.4em] text-xs mb-4"
            >
              WHY CHOOSE US
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extralight text-foreground leading-tight mb-6"
            >
              We're not just designers,
              <br />
              <span className="italic font-light">
                we're partners
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg font-light leading-relaxed"
            >
              We invest in understanding your business as
              deeply as you do. This allows us to create
              solutions that don't just look good—they work.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                number: "150+",
                label: "Projects Delivered",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
              },
              { number: "40+", label: "Awards Won" },
              { number: "8+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-secondary border border-border p-6 text-center hover:border-accent/50 transition-colors"
              >
                <p className="text-3xl md:text-4xl font-extralight text-foreground">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-xs tracking-widest mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Ready to elevate your brand?"
        description="Let's discuss your project and explore how we can help you achieve your goals."
        primaryAction={{
          label: "START A PROJECT",
          href: "/contact",
        }}
        secondaryAction={{
          label: "VIEW OUR WORK",
          href: "/work",
        }}
        variant="dark"
      />

      <Footer />
    </div>
  );
}
