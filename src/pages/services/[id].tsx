// src/pages/services/[id].tsx

import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/studio/navigation";
import { Footer } from "@/components/studio/footer";
import { PageHeader } from "@/components/studio/shared/page-header";
import { SectionContainer } from "@/components/studio/layout";
import {
  SectionTitle,
  ItalicText,
} from "@/components/studio/typography";
import { RelatedItems } from "@/components/studio/shared/related-items";
import { CTASection } from "@/components/studio/shared/cta-section";
import {
  AnimatedDiv,
  StaggerContainer,
  fadeInUp,
} from "@/components/studio/animations";
import { Separator } from "@/components/ui/separator";

import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  getRelatedCaseStudies,
  getServiceById,
  services,
} from "@/data/data";

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = getServiceById(id || "");

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedCaseStudies = getRelatedCaseStudies(
    service.id
  );
  const currentIndex = services.findIndex(
    (s: { id: string }) => s.id === service.id
  );
  const nextService =
    services[(currentIndex + 1) % services.length];
  const prevService =
    services[
      (currentIndex - 1 + services.length) % services.length
    ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHeader
        label="SERVICE"
        title={service.title}
        description={service.fullDescription}
        gradient={service.heroImage}
        backLink={{
          href: "/services",
          label: "ALL SERVICES",
        }}
        meta={[
          { label: "STARTING AT", value: service.pricing },
          { label: "TIMELINE", value: service.duration },
        ]}
      />

      {/* Features Section */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <AnimatedDiv>
              <SectionTitle
                label="WHAT'S INCLUDED"
                title={
                  <>
                    Comprehensive{" "}
                    <ItalicText>deliverables</ItalicText>
                  </>
                }
              />
            </AnimatedDiv>
            <AnimatedDiv delay={0.1}>
              <Separator className="w-24 bg-accent h-px my-8" />
            </AnimatedDiv>
            <AnimatedDiv delay={0.2}>
              <p className="text-muted-foreground font-light leading-relaxed">
                Every {service.title.toLowerCase()} project
                includes a comprehensive set of deliverables
                tailored to your specific needs. We ensure
                every aspect of your brand is thoughtfully
                crafted and professionally executed.
              </p>
            </AnimatedDiv>
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-6">
            {service.features.map((feature: string) => (
              <motion.div
                key={feature}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 border border-border hover:border-accent/30 hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="w-6 h-6 border border-accent/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <span className="text-foreground font-light">
                  {feature}
                </span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </SectionContainer>

      {/* Process Section */}
      <SectionContainer variant="cream">
        <SectionTitle
          label="OUR PROCESS"
          title={
            <>
              How we approach{" "}
              <ItalicText>
                {service.title.toLowerCase()}
              </ItalicText>
            </>
          }
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process.map(
            ({
              step,
              index,
            }: {
              step: { title: string; description: string };
              index: number;
            }) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative"
              >
                {/* Step Number */}
                <div className="text-accent text-sm tracking-widest mb-4">
                  STEP {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <h3 className="text-xl font-light text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-accent/30" />
                )}
              </motion.div>
            )
          )}
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer variant="dark">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent tracking-ultra text-xs mb-4"
            >
              THE BENEFITS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extralight text-background leading-tight"
            >
              Why invest in <br />
              <span className="italic font-light">
                {service.title.toLowerCase()}
              </span>
              ?
            </motion.h2>
          </div>

          <StaggerContainer className="space-y-6">
            {service.benefits.map(
              ({
                benefit,
                index,
              }: {
                benefit: string;
                index: number;
              }) => (
                <motion.div
                  key={benefit}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-6 border border-background/10 hover:border-accent/30 transition-colors"
                >
                  <div className="w-8 h-8 border border-accent flex items-center justify-center shrink-0">
                    <span className="text-accent text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-background/80 font-light text-lg">
                    {benefit}
                  </p>
                </motion.div>
              )
            )}
          </StaggerContainer>
        </div>
      </SectionContainer>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <RelatedItems
          label="RELATED WORK"
          title="See it in action"
          items={relatedCaseStudies.map(
            (study: {
              id: string;
              title: string;
              shortDescription: string;
              category: string;
              heroImage: string;
            }) => ({
              id: study.id,
              title: study.title,
              description: study.shortDescription,
              category: study.category,
              gradient: study.heroImage,
              href: `/work/${study.id}`,
            })
          )}
        />
      )}

      {/* Service Navigation */}
      <section className="border-t border-border">
        <div className="grid md:grid-cols-2">
          <Link
            to={`/services/${prevService.id}`}
            className="block group"
          >
            <motion.div
              className="px-6 md:px-12 lg:px-24 py-12 md:py-16 border-r border-border hover:bg-secondary/50 transition-colors"
              whileHover={{ x: -5 }}
            >
              <div className="text-muted-foreground text-sm tracking-widest mb-3">
                PREVIOUS SERVICE
              </div>
              <h3 className="text-2xl font-light text-foreground group-hover:text-accent transition-colors">
                {prevService.title}
              </h3>
            </motion.div>
          </Link>
          <Link
            to={`/services/${nextService.id}`}
            className="block group"
          >
            <motion.div
              className="px-6 md:px-12 lg:px-24 py-12 md:py-16 text-right hover:bg-secondary/50 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="text-muted-foreground text-sm tracking-widest mb-3">
                NEXT SERVICE
              </div>
              <h3 className="text-2xl font-light text-foreground group-hover:text-accent transition-colors">
                {nextService.title}
              </h3>
            </motion.div>
          </Link>
        </div>
      </section>

      <CTASection
        title={`Ready to start your ${service.title.toLowerCase()} project?`}
        description="Let's discuss your vision and create something extraordinary together."
        primaryAction={{
          label: "GET IN TOUCH",
          href: "/contact",
        }}
        secondaryAction={{
          label: "VIEW ALL SERVICES",
          href: "/services",
        }}
        variant="dark"
      />

      <Footer />
    </div>
  );
}
