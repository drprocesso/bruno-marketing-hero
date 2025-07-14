import { HeroSection } from "@/components/HeroSection";
import { ProvasReais } from "@/components/ProvasReais";
import { CriativosVSLs } from "@/components/CriativosVSLs";
import { MicroSaasSection } from "@/components/MicroSaasSection";
import { BuscandoEquipe } from "@/components/BuscandoEquipe";
import { SkillsSection } from "@/components/SkillsSection";
import { Timeline } from "@/components/Timeline";
import { ChatSimulado } from "@/components/ChatSimulado";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
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
