import { lazy, Suspense } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Lazy load sections for better performance
const HeroSection = lazy(() => import("./sections/HeroSection").then(module => ({ default: module.HeroSection })));
const ProvasReais = lazy(() => import("./sections/ProvasReais").then(module => ({ default: module.ProvasReais })));
const CriativosVSLs = lazy(() => import("./sections/CriativosVSLs").then(module => ({ default: module.CriativosVSLs })));
const BuscandoEquipe = lazy(() => import("./sections/BuscandoEquipe").then(module => ({ default: module.BuscandoEquipe })));
const SkillsSection = lazy(() => import("./sections/SkillsSection").then(module => ({ default: module.SkillsSection })));
const Timeline = lazy(() => import("./sections/Timeline").then(module => ({ default: module.Timeline })));
const ChatSimulado = lazy(() => import("./sections/ChatSimulado").then(module => ({ default: module.ChatSimulado })));
const Footer = lazy(() => import("./sections/Footer").then(module => ({ default: module.Footer })));

const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="animate-pulse bg-muted rounded-lg h-32 w-full max-w-4xl"></div>
  </div>
);
const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ProvasReais />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CriativosVSLs />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BuscandoEquipe />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ChatSimulado />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
