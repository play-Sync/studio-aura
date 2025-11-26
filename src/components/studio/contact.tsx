import { useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionContainer } from "./layout";
import { SectionTitle, ItalicText } from "./typography";
import {
  AnimatedDiv,
  StaggerContainer,
  fadeInUp,
} from "./animations";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Instagram,
  Dribbble,
  Linkedin,
  Twitter,
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
    label: "LOCATION",
    value: "Brooklyn, New York",
    href: "#",
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Dribbble, label: "Dribbble", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );
    setIsSubmitting(false);
    setFormState({
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    });
  };

  return (
    <SectionContainer
      id="contact"
      variant="cream"
      size="large"
    >
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Side - Info */}
        <div>
          <AnimatedDiv>
            <SectionTitle
              label="GET IN TOUCH"
              title={
                <>
                  Let's create
                  <br />
                  <ItalicText>something</ItalicText>{" "}
                  together
                </>
              }
              description="Have a project in mind? We'd love to hear about it. Drop us a line and let's explore how we can bring your vision to life."
            />
          </AnimatedDiv>

          <AnimatedDiv delay={0.1}>
            <Separator className="w-24 bg-accent h-px my-10" />
          </AnimatedDiv>

          {/* Contact Details */}
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
                  <p className="text-foreground text-lg font-light group-hover:text-accent transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </StaggerContainer>

          {/* Social Links */}
          <AnimatedDiv delay={0.4} className="mt-12">
            <p className="text-muted-foreground text-xs tracking-widest mb-4">
              FOLLOW US
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 border border-border flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon
                    className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors"
                    strokeWidth={1}
                  />
                </a>
              ))}
            </div>
          </AnimatedDiv>
        </div>

        {/* Right Side - Form */}
        <AnimatedDiv delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-background p-8 md:p-12 border border-border"
          >
            <div className="grid md:grid-cols-2 gap-8">
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
                  className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base focus:border-accent focus-visible:ring-0 placeholder:text-muted-foreground/40"
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
                  className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base focus:border-accent focus-visible:ring-0 placeholder:text-muted-foreground/40"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
                  className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base focus:border-accent focus-visible:ring-0 placeholder:text-muted-foreground/40"
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
                  className="w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-base focus:border-accent focus:outline-none text-foreground"
                >
                  <option
                    value=""
                    className="text-muted-foreground"
                  >
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
                  <option value="100k+">$100,000+</option>
                </select>
              </div>
            </div>

            <div>
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
                className="rounded-none border-0 border-b border-border bg-transparent px-0 py-4 text-base focus:border-accent focus-visible:ring-0 min-h-[150px] resize-none placeholder:text-muted-foreground/40"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-none bg-foreground text-background py-6 text-sm tracking-widest hover:bg-accent transition-all duration-500 disabled:opacity-50 group"
            >
              {isSubmitting ? (
                "SENDING..."
              ) : (
                <>
                  SEND MESSAGE
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <p className="text-muted-foreground/60 text-xs text-center">
              We typically respond within 24-48 hours.
            </p>
          </form>
        </AnimatedDiv>
      </div>
    </SectionContainer>
  );
}
