// src/pages/index.tsx (Updated Home Page)

import { Navigation } from "@/components/studio/navigation";
import { Hero } from "@/components/studio/hero";
import { About } from "@/components/studio/about";
import { Services } from "@/components/studio/services";
import { CaseStudies } from "@/components/studio/case-studies";
import { ProcessTimeline } from "@/components/studio/process-timeline";
import { Contact } from "@/components/studio/contact";
import { Footer } from "@/components/studio/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <ProcessTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
