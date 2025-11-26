import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DisplayHeading,
  ItalicText,
  LabelText,
} from "./typography";
import { ArrowDown, Play } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-accent/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-accent/10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-accent/5" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Accent Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent/50 rounded-full"
      />

      {/* Hero Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <LabelText>CREATIVE STUDIO</LabelText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <DisplayHeading size="xl">
            We craft brands
            <br />
            <ItalicText>that resonate</ItalicText>
          </DisplayHeading>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          Strategic design studio specializing in brand
          identity, digital experiences, and creative
          direction for forward-thinking companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="outline"
            className="rounded-none border-foreground text-foreground px-10 py-6 text-sm tracking-widest hover:bg-foreground hover:text-background transition-all duration-500"
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            VIEW WORK
          </Button>
          <Button
            variant="ghost"
            className="rounded-none text-muted-foreground px-10 py-6 text-sm tracking-widest hover:text-foreground group"
          >
            <Play className="w-4 h-4 mr-2 group-hover:text-foreground transition-colors" />
            WATCH REEL
          </Button>
        </motion.div>

        {/* Client Logos Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20"
        >
          <p className="text-xs tracking-widest text-muted-foreground/60 mb-6">
            TRUSTED BY
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 opacity-40">
            {[
              "ACME",
              "APEX",
              "NOVA",
              "PULSE",
              "ZENITH",
            ].map((brand) => (
              <span
                key={brand}
                className="text-sm md:text-base font-light tracking-widest"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-muted-foreground">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
