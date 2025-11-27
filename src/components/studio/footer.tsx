import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUp,
  Instagram,
  Dribbble,
  Linkedin,
  Twitter,
} from "lucide-react";

const footerLinks = {
  services: [
    {
      label: "Brand Identity",
      href: "/services/brand-identity",
    },
    { label: "Web Design", href: "/services/web-design" },
    { label: "Strategy", href: "/services/strategy" },
    {
      label: "Art Direction",
      href: "/services/art-direction",
    },
    {
      label: "Motion Design",
      href: "/services/motion-design",
    },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Dribbble, label: "Dribbble", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/">
              <motion.span
                className="text-2xl font-light tracking-[0.3em] text-background inline-block mb-6"
                whileHover={{ letterSpacing: "0.35em" }}
              >
                STUDIO AURA
              </motion.span>
            </Link>
            <p className="text-background/60 font-light leading-relaxed mb-8 max-w-xs">
              Strategic design studio crafting brands that
              resonate and digital experiences that inspire.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-background/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon
                    className="w-4 h-4 text-background/60 group-hover:text-accent transition-colors"
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-widest text-background/40 mb-6">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest text-background/40 mb-6">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-widest text-background/40 mb-6">
              NEWSLETTER
            </h4>
            <p className="text-background/60 font-light text-sm mb-4">
              Subscribe to receive updates, insights, and
              inspiration.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border border-background/20 border-r-0 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-4 border border-background/20 hover:bg-accent hover:border-accent transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </form>
          </div>
        </div>

        <Separator className="bg-background/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Studio Aura. All
            rights reserved.
          </p>

          <div className="flex items-center gap-8">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-background/40 hover:text-background transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-background/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-background/60 group-hover:text-accent transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
