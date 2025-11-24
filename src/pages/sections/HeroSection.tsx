import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Eye } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-slide-up">
          <div className="mb-6">
            <span className="text-neon-green text-sm font-bold tracking-wider uppercase">
              Copywriter & Criador de VSLs • Gestor de Tráfego
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Criei VSLs que geraram{" "}
            <span className="text-gradient-primary">R$800k+</span>{" "}
            em vendas
          </h1>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gradient-secondary">
            Copy persuasiva + tráfego estratégico = resultados reais
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Especialista em criar VSLs de alta conversão, criativos que performam e gestão de tráfego que escala. 
            Dashboards reais, números reais, resultados comprovados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="lg" className="group" asChild>
              <a 
                href="https://wa.me/5561999752578" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Falar comigo no WhatsApp - Bruno Zafred"
              >
                <MessageCircle />
                Vamos conversar sobre suas VSLs
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button variant="neonOutline" size="lg" className="group">
              <Eye />
              <a 
                href="#criativos-vsls" 
                className="flex items-center"
                aria-label="Ver meus cases de criativos e VSLs"
              >
                Ver provas reais de resultado
              </a>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-neon-green">R$800k+</div>
              <div className="text-sm text-muted-foreground">Vendidos com VSLs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-neon-blue">R$409k+</div>
              <div className="text-sm text-muted-foreground">Investidos em tráfego</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-neon-purple">10k+</div>
              <div className="text-sm text-muted-foreground">Vendas realizadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}