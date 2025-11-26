// src/pages/contact.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/studio/navigation";
import { Footer } from "@/components/studio/footer";
import { PageHeader } from "@/components/studio/shared/page-header";
import { SectionContainer } from "@/components/studio/layout";
import {
  SectionTitle,
  ItalicText,
} from "@/components/studio/typography";
import {
  AnimatedDiv,
  StaggerContainer,
  fadeInUp,
} from "@/components/studio/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "hello@studioaura.com",
    href: "mailto:hello@studioaura.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "STUDIO",
    value: "Brooklyn, New York",
    href: "#",
  },
  {
    icon: Clock,
    label: "HOURS",
    value: "Mon - Fri, 9am - 6pm EST",
    href: "#",
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope, but most branding projects take 6-10 weeks, web projects 8-12 weeks, and strategy projects 4-6 weeks.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We provide custom quotes based on project scope. Branding starts at $15,000, web design at $20,000, and strategy at $10,000.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely! We love working with startups and have flexible packages designed for early-stage companies.",
  },
  {
    question: "What is your process like?",
    answer:
      "Every project follows our proven process: Discovery, Strategy, Design, and Delivery. We keep you involved at every step.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHeader
        label="GET IN TOUCH"
        title="Let's work together"
        description="Have a project in mind? We'd love to hear about your vision and explore how we can bring it to life."
        gradient="from-accent/80 to-accent/60"
      />

      {/* Contact Form Section */}
      <SectionContainer>
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedDiv>
              <SectionTitle
                label="CONTACT INFO"
                title={
                  <>
                    Reach out{" "}
                    <ItalicText>anytime</ItalicText>
                  </>
                }
              />
            </AnimatedDiv>

            <AnimatedDiv delay={0.1}>
              <Separator className="w-24 bg-accent h-px my-8" />
            </AnimatedDiv>

            <StaggerContainer className="space-y-6">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={fadeInUp}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <item.icon
                      className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors"
                      strokeWidth={1}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-foreground font-light group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </StaggerContainer>

            {/* Map Placeholder */}
            <AnimatedDiv delay={0.4} className="mt-12">
              <div className="aspect-4/3 bg-secondary border border-border relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin
                      className="w-8 h-8 text-accent mx-auto mb-3"
                      strokeWidth={1}
                    />
                    <p className="text-muted-foreground text-sm">
                      Brooklyn, NY
                    </p>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
            </AnimatedDiv>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedDiv>
              {isSubmitted ? (
                <div className="bg-secondary border border-border p-12 text-center">
                  <CheckCircle
                    className="w-16 h-16 text-accent mx-auto mb-6"
                    strokeWidth={1}
                  />
                  <h3 className="text-2xl font-light text-foreground mb-4">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-muted-foreground font-light">
                    We've received your message and will get
                    back to you within 24-48 hours.
                  </p>
                  <Button
                    className="mt-8 rounded-none"
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        budget: "",
                        timeline: "",
                        message: "",
                      });
                    }}
                  >
                    SEND ANOTHER MESSAGE
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-secondary border border-border p-8 md:p-12"
                >
                  <h3 className="text-2xl font-light text-foreground mb-8">
                    Start a project
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label className="text-muted-foreground text-xs tracking-widest block mb-3">
                        YOUR NAME *
                      </label>
                      <Input
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            name: e.target.value,
                          })
                        }
                        className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base focus:border-accent focus-visible:ring-0"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-muted-foreground text-xs tracking-widest block mb-3">
                        EMAIL ADDRESS *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            email: e.target.value,
                          })
                        }
                        className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base focus:border-accent focus-visible:ring-0"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label className="text-muted-foreground text-xs tracking-widest block mb-3">
                        COMPANY
                      </label>
                      <Input
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            company: e.target.value,
                          })
                        }
                        className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base focus:border-accent focus-visible:ring-0"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="text-muted-foreground text-xs tracking-widest block mb-3">
                        BUDGET RANGE
                      </label>
                      <select
                        value={formState.budget}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            budget: e.target.value,
                          })
                        }
                        className="w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base focus:border-accent focus:outline-none text-foreground"
                      >
                        <option value="">
                          Select a range
                        </option>
                        <option value="10-25k">
                          $10,000 - $25,000
                        </option>
                        <option value="25-50k">
                          $25,000 - $50,000
                        </option>
                        <option value="50-100k">
                          $50,000 - $100,000
                        </option>
                        <option value="100k+">
                          $100,000+
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="text-muted-foreground text-xs tracking-widest block mb-3">
                      IDEAL TIMELINE
                    </label>
                    <select
                      value={formState.timeline}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          timeline: e.target.value,
                        })
                      }
                      className="w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base
                      // src/pages/contact.tsx (continued)

                      focus:border-accent focus:outline-none text-foreground"
                    >
                      <option value="">
                        Select timeline
                      </option>
                      <option value="asap">
                        As soon as possible
                      </option>
                      <option value="1-2months">
                        1-2 months
                      </option>
                      <option value="3-6months">
                        3-6 months
                      </option>
                      <option value="flexible">
                        Flexible
                      </option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label className="text-muted-foreground text-xs tracking-widest block mb-3">
                      PROJECT DETAILS *
                    </label>
                    <Textarea
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          message: e.target.value,
                        })
                      }
                      className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base focus:border-accent focus-visible:ring-0 min-h-[150px] resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-none bg-foreground text-background py-6 text-sm tracking-widest hover:bg-accent transition-all duration-500 disabled:opacity-50 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
                        />
                        SENDING...
                      </span>
                    ) : (
                      <>
                        SEND MESSAGE
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-muted-foreground/60 text-xs text-center mt-6">
                    We typically respond within 24-48 hours.
                  </p>
                </form>
              )}
            </AnimatedDiv>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer variant="cream">
        <SectionTitle
          label="FAQ"
          title={
            <>
              Common <ItalicText>questions</ItalicText>
            </>
          }
          align="center"
          className="mb-16"
        />

        <div className="max-w-3xl mx-auto">
          <StaggerContainer className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-border bg-background p-6 md:p-8"
              >
                <h3 className="text-lg font-light text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </SectionContainer>

      {/* Schedule Call CTA */}
      <SectionContainer variant="dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Calendar
              className="w-12 h-12 text-accent mx-auto mb-6"
              strokeWidth={1}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extralight text-background leading-tight"
          >
            Prefer to talk?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-background/70 text-lg font-light mt-4 mb-8"
          >
            Schedule a free 30-minute discovery call to
            discuss your project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button className="rounded-none bg-background text-foreground px-10 py-6 text-sm tracking-widest hover:bg-accent hover:text-foreground transition-all duration-500 group">
              SCHEDULE A CALL
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </SectionContainer>

      <Footer />
    </div>
  );
}
