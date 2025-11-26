// src/App.tsx

import { Routes, Route } from "react-router-dom";

import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services/index";
import WorkPage from "@/pages/work/index";
import CaseStudyDetailPage from "@/pages/work/[id]/CaseStudyDetailPage";
import ContactPage from "@/pages/contact";
import HomePage from "./pages";
import ScrollToTop from "./components/scroll-to-top";
import ServiceDetailPage from "./pages/services/[id]/ServiceDetailPage";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/services"
          element={<ServicesPage />}
        />
        <Route
          path="/services/:id"
          element={<ServiceDetailPage />}
        />
        <Route path="/work" element={<WorkPage />} />
        <Route
          path="/work/:id"
          element={<CaseStudyDetailPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
