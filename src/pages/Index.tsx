import { HeroSection } from "./sections/HeroSection";
import { ProvasReais } from "./sections/ProvasReais";
import { CriativosVSLs } from "./sections/CriativosVSLs";
import { MicroSaasSection } from "./sections/MicroSaasSection";
import { BuscandoEquipe } from "./sections/BuscandoEquipe";
import { SkillsSection } from "./sections/SkillsSection";
import { Timeline } from "./sections/Timeline";
import { ChatSimulado } from "./sections/ChatSimulado";
import { Footer } from "./sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ProvasReais />
      <CriativosVSLs />
      <MicroSaasSection />
      <BuscandoEquipe />
      <SkillsSection />
      <Timeline />
      <ChatSimulado />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
