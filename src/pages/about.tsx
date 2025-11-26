// src/pages/about.tsx

import { motion } from "framer-motion";
import { Navigation } from "@/components/studio/navigation";
import { Footer } from "@/components/studio/footer";
import { PageHeader } from "@/components/studio/shared/page-header";
import { SectionContainer } from "@/components/studio/layout";
import {
  SectionTitle,
  ItalicText,
} from "@/components/studio/typography";
import { CTASection } from "@/components/studio/shared/cta-section";
import {
  AnimatedDiv,
  StaggerContainer,
  fadeInUp,
} from "@/components/studio/animations";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  Users,
  Calendar,
  Briefcase,
  Linkedin,
  Twitter,
  Dribbble,
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

const values = [
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we create, never settling for good enough.",
  },
  {
    title: "Collaboration",
    description:
      "The best work comes from true partnership. We work alongside our clients, not just for them.",
  },
  {
    title: "Innovation",
    description:
      "We push boundaries and challenge conventions to create work that stands out and moves forward.",
  },
  {
    title: "Integrity",
    description:
      "Honest communication, transparent processes, and doing what's right guide every decision.",
  },
];

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & Creative Director",
    bio: "Former Design Lead at Pentagram with 15+ years of experience in brand strategy.",
    gradient: "from-violet-400 to-purple-600",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Marcus Williams",
    role: "Head of Strategy",
    bio: "Strategic thinker with a background in behavioral psychology and brand consulting.",
    gradient: "from-blue-400 to-indigo-600",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sofia Rodriguez",
    role: "Design Director",
    bio: "Award-winning designer specializing in visual identity and digital experiences.",
    gradient: "from-rose-400 to-pink-600",
    social: { linkedin: "#", dribbble: "#" },
  },
  {
    name: "James Park",
    role: "Technical Director",
    bio: "Full-stack developer with a passion for creating seamless digital experiences.",
    gradient: "from-emerald-400 to-teal-600",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Emma Thompson",
    role: "Senior Designer",
    bio: "Multidisciplinary designer with expertise in motion graphics and art direction.",
    gradient: "from-amber-400 to-orange-600",
    social: { linkedin: "#", dribbble: "#" },
  },
  {
    name: "David Kim",
    role: "Project Manager",
    bio: "Operations expert ensuring every project runs smoothly from start to finish.",
    gradient: "from-cyan-400 to-blue-600",
    social: { linkedin: "#" },
  },
];

const awards = [
  { name: "Awwwards Site of the Day", count: 12 },
  { name: "CSS Design Awards", count: 8 },
  { name: "FWA of the Day", count: 15 },
  { name: "Communication Arts", count: 5 },
];

const clients = [
  "Google",
  "Spotify",
  "Airbnb",
  "Nike",
  "Apple",
  "Meta",
  "Netflix",
  "Stripe",
  "Slack",
  "Dropbox",
  "Adobe",
  "Figma",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHeader
        label="ABOUT US"
        title="The studio"
        description="A team of strategists, designers, and developers crafting brands that resonate and experiences that inspire."
        gradient="from-foreground to-foreground/80"
      />

      {/* Story Section */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <AnimatedDiv>
              <SectionTitle
                label="OUR STORY"
                title={
                  <>
                    Built on passion,
                    <br />
                    <ItalicText>
                      driven by purpose
                    </ItalicText>
                  </>
                }
              />
            </AnimatedDiv>

            <AnimatedDiv delay={0.1}>
              <Separator className="w-24 bg-accent h-px my-8" />
            </AnimatedDiv>

            <AnimatedDiv delay={0.2}>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                Studio Aura was founded in 2018 with a
                simple belief: great design has the power to
                transform businesses and shape culture. What
                started as a small team of three has grown
                into a full-service creative studio.
              </p>
            </AnimatedDiv>

            <AnimatedDiv delay={0.3}>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                We've had the privilege of working with
                startups finding their voice and established
                brands seeking reinvention. Each project has
                taught us something new and reinforced our
                commitment to excellence.
              </p>
            </AnimatedDiv>

            <AnimatedDiv delay={0.4}>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Today, we're proud to be recognized as one
                of the leading creative studios in New York,
                but we're even prouder of the relationships
                we've built and the impact our work has
                made.
              </p>
            </AnimatedDiv>
          </div>

          <AnimatedDiv className="relative">
            <div className="aspect-square bg-foreground relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-accent/30 via-transparent to-accent/10" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-background text-sm tracking-widest font-light">
                  EST. 2018
                </p>
                <p className="text-background/60 text-sm mt-2">
                  Brooklyn, New York
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent" />
            <div className="absolute -top-6 -left-6 w-20 h-20 border border-accent/30" />
          </AnimatedDiv>
        </div>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center group"
            >
              <stat.icon
                className="w-6 h-6 mx-auto mb-4 text-accent opacity-60 group-hover:opacity-100 transition-opacity"
                strokeWidth={1}
              />
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

      {/* Values Section */}
      <SectionContainer variant="cream">
        <SectionTitle
          label="OUR VALUES"
          title={
            <>
              What we <ItalicText>stand for</ItalicText>
            </>
          }
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="text-center p-8 border border-border bg-background hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-accent text-lg font-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-light text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Team Section */}
      <SectionContainer>
        <SectionTitle
          label="THE TEAM"
          title={
            <>
              Meet the <ItalicText>people</ItalicText>
            </>
          }
          description="A diverse team of creative minds united by a shared passion for exceptional work."
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group"
            >
              {/* Photo */}
              <div className="aspect-4/5 relative overflow-hidden mb-6">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${member.gradient}`}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500" />

                {/* Social Links on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background/20 transition-colors"
                    >
                      <Linkedin
                        className="w-4 h-4 text-background"
                        strokeWidth={1.5}
                      />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background/20 transition-colors"
                    >
                      <Twitter
                        className="w-4 h-4 text-background"
                        strokeWidth={1.5}
                      />
                    </a>
                  )}
                  {member.social.dribbble && (
                    <a
                      href={member.social.dribbble}
                      className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background/20 transition-colors"
                    >
                      <Dribbble
                        className="w-4 h-4 text-background"
                        strokeWidth={1.5}
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-light text-foreground group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-accent text-sm tracking-widest mt-1">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm font-light mt-3 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Awards Section */}
      <SectionContainer variant="dark">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent tracking-ultra text-xs mb-4"
            >
              RECOGNITION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extralight text-background leading-tight"
            >
              Award-winning <ItalicText>work</ItalicText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-background/70 text-lg font-light mt-6 leading-relaxed"
            >
              Our work has been recognized by leading design
              organizations worldwide, but our greatest
              reward is the success of our clients.
            </motion.p>
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-6">
            {awards.map((award) => (
              <motion.div
                key={award.name}
                variants={fadeInUp}
                className="border border-background/10 p-6 hover:border-accent/30 transition-colors"
              >
                <p className="text-4xl font-extralight text-accent">
                  {award.count}
                </p>
                <p className="text-background/70 text-sm mt-2">
                  {award.name}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </SectionContainer>

      {/* Clients Section */}
      <SectionContainer>
        <SectionTitle
          label="OUR CLIENTS"
          title="Trusted by industry leaders"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="flex items-center justify-center p-6 border border-border hover:border-accent/50 transition-colors"
            >
              <span className="text-muted-foreground font-light tracking-widest text-sm">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      <CTASection
        title="Want to join our team?"
        description="We're always looking for talented individuals who share our passion for great work."
        primaryAction={{
          label: "VIEW CAREERS",
          href: "/careers",
        }}
        secondaryAction={{
          label: "GET IN TOUCH",
          href: "/contact",
        }}
        variant="dark"
      />

      <Footer />
    </div>
  );
}
