// src/components/studio/navigation.tsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Check if we're on homepage
  const isHomePage = location.pathname === "/";

  // Determine if navigation should have light text (transparent bg on homepage before scroll)
  // or dark text (solid bg after scroll or on inner pages)
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset scroll state when route changes
  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 50);
    handleScroll(); // Check initial scroll position
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <motion.div
            className="relative"
            whileHover="hover"
            initial="initial"
          >
            <motion.span
              className={`text-xl md:text-2xl font-light tracking-[0.3em] inline-block transition-colors duration-300 text-foreground`}
              variants={{
                initial: { letterSpacing: "0.3em" },
                hover: { letterSpacing: "0.35em" },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              STUDIO AURA
            </motion.span>
            <motion.span
              className="absolute -bottom-1 left-0 h-px bg-accent"
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm tracking-widest transition-colors duration-300 relative group ${
                isActive(item.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  isActive(item.href)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Link to="/contact" className="hidden lg:block">
          <Button
            variant="outline"
            className={`rounded-none transition-all duration-300 text-xs tracking-widest px-6 border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background`}
          >
            START PROJECT
          </Button>
        </Link>

        {/* Mobile Menu */}
        <Sheet
          open={mobileOpen}
          onOpenChange={setMobileOpen}
        >
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-foreground/10"
              }`}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-80 bg-background border-l border-border"
          >
            <div className="flex flex-col h-full pt-12">
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl font-light tracking-widest transition-colors text-left ${
                      isActive(item.href)
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button className="w-full rounded-none bg-foreground text-background hover:bg-accent hover:text-foreground transition-all duration-300">
                    START PROJECT
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
