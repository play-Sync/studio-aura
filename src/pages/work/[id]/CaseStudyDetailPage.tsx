// src/pages/work/[id].tsx

import {
  useParams,
  Navigate,
  Link,
} from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/studio/navigation";
import { Footer } from "@/components/studio/footer";
import { PageHeader } from "@/components/studio/shared/page-header";
import { SectionContainer } from "@/components/studio/layout";
import {
  SectionTitle,
  ItalicText,
} from "@/components/studio/typography";
import { ProjectNavigation } from "@/components/studio/shared/project-navigation";
import { CTASection } from "@/components/studio/shared/cta-section";
import {
  AnimatedDiv,
  StaggerContainer,
  fadeInUp,
} from "@/components/studio/animations";
import { Separator } from "@/components/ui/separator";

import { Quote } from "lucide-react";
import { getCaseStudyById } from "@/data/data";

export default function CaseStudyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = getCaseStudyById(id);
  if (!caseStudy) {
    return <Navigate to="/work" replace />;
  }

  const prevStudy = getCaseStudyById(caseStudy.prevProject);
  const nextStudy = getCaseStudyById(caseStudy.nextProject);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHeader
        label={caseStudy.category.toUpperCase()}
        title={caseStudy.title}
        description={caseStudy.fullDescription}
        gradient={caseStudy.heroImage}
        backLink={{ href: "/work", label: "ALL PROJECTS" }}
        meta={[
          { label: "CLIENT", value: caseStudy.client },
          { label: "YEAR", value: caseStudy.year },
        ]}
      />

      {/* Results Section */}
      <SectionContainer variant="dark">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent tracking-ultra text-xs text-center mb-8"
        >
          PROJECT RESULTS
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {caseStudy.results.map(
            (
              result: { label: string; metric: string },
              index: number
            ) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-extralight text-background">
                  {result?.metric}
                </p>
                <p className="text-background/60 text-sm tracking-widest mt-2">
                  {result?.label}
                </p>
              </motion.div>
            )
          )}
        </div>
      </SectionContainer>

      {/* Challenge & Solution */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Challenge */}
          <AnimatedDiv>
            <SectionTitle
              label="THE CHALLENGE"
              title={
                <>
                  Understanding the{" "}
                  <ItalicText>problem</ItalicText>
                </>
              }
            />
            <Separator className="w-24 bg-accent h-px my-8" />
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              {caseStudy.challenge}
            </p>
          </AnimatedDiv>

          {/* Solution */}
          <AnimatedDiv delay={0.2}>
            <SectionTitle
              label="THE SOLUTION"
              title={
                <>
                  Our strategic{" "}
                  <ItalicText>approach</ItalicText>
                </>
              }
            />
            <Separator className="w-24 bg-accent h-px my-8" />
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              {caseStudy.solution}
            </p>
          </AnimatedDiv>
        </div>
      </SectionContainer>

      {/* Services Used */}
      <SectionContainer variant="cream">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent tracking-ultra text-xs mb-4"
          >
            SERVICES PROVIDED
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extralight text-foreground"
          >
            What we delivered
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {caseStudy.services.map(
            ({
              serviceName,
              index,
            }: {
              serviceName: string;
              index: number;
            }) => (
              <motion.div
                key={serviceName}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <Link
                  to={`/services/${serviceName}`}
                  className="block px-8 py-4 border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                >
                  <span className="text-foreground group-hover:text-accent transition-colors tracking-widest text-sm">
                    {serviceName}
                  </span>
                </Link>
              </motion.div>
            )
          )}
        </div>
      </SectionContainer>

      {/* Gallery */}
      <SectionContainer>
        <SectionTitle
          label="PROJECT GALLERY"
          title="Visual exploration"
          align="center"
          className="mb-16"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudy.gallery.map(
            (
              item: {
                gradient: string;
                caption: string;
              },
              index: number
            ) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative overflow-hidden group cursor-pointer ${
                  index === 0 || index === 3 || index === 4
                    ? "md:col-span-2 "
                    : "aspect-square"
                }`}
              >
                {/* aspect-21/10 */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.gradient}`}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500" />

                {/* Caption */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-background text-sm tracking-widest border border-background/30 px-6 py-3">
                    {item.caption}
                  </span>
                </div>
              </motion.div>
            )
          )}
        </StaggerContainer>
      </SectionContainer>

      {/* Testimonial */}
      <SectionContainer variant="dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Quote
              className="w-12 h-12 text-accent mx-auto mb-8"
              strokeWidth={1}
            />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-extralight text-background leading-relaxed italic"
          >
            "{caseStudy.testimonial.quote}"
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <p className="text-background font-light">
              {caseStudy.testimonial.author}
            </p>
            <p className="text-background/60 text-sm">
              {caseStudy.testimonial.role}
            </p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={
          prevStudy
            ? {
                id: prevStudy.id,
                title: prevStudy.title,
                href: `/work/${prevStudy.id}`,
              }
            : undefined
        }
        nextProject={
          nextStudy
            ? {
                id: nextStudy.id,
                title: nextStudy.title,
                href: `/work/${nextStudy.id}`,
              }
            : undefined
        }
      />

      <CTASection
        title="Inspired by this project?"
        description="Let's create something equally impactful for your brand."
        primaryAction={{
          label: "START YOUR PROJECT",
          href: "/contact",
        }}
        secondaryAction={{
          label: "EXPLORE MORE WORK",
          href: "/work",
        }}
      />

      <Footer />
    </div>
  );
}
