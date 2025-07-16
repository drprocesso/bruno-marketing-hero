import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Eye } from "lucide-react";
import brunoAvatar from "@/assets/bruno.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left animate-slide-up">
          <div className="mb-6">
            <span className="text-neon-green text-sm font-bold tracking-wider uppercase">
              Marketing Strategist • Traffic Manager • VSL Creator
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-5xl font-black mb-6 leading-tight">
            Já construí mais de{" "}
            <span className="text-gradient-primary">100 sistemas completos</span>{" "}
            de vendas e atendimentos
          </h1>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gradient-secondary">
            Agora, quero investir meu talento no seu projeto.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">Especialista em tráfego, criativos que convertem e VSLs que vendem, Webdesigner e Desenvolvedor de SaaS. Cases reais de faturamento.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="whatsapp" size="lg" className="group" asChild>
              <a href="https://wa.me/5561990442148" target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                Falar comigo no WhatsApp
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button variant="neonOutline" size="lg" className="group">
              <Eye />
              <a href="#criativos-vsls" className="flex items-center">
                Ver meus cases
              </a>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-black text-neon-green">R$500k+</div>
              <div className="text-sm text-muted-foreground">Investido em tráfego</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-neon-blue">3+</div>
              <div className="text-sm text-muted-foreground">Micro SaaS criados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-neon-purple">100+</div>
              <div className="text-sm text-muted-foreground">Websites Criados</div>
            </div>
          </div>
        </div>
        
        {/* Avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
            <img src={brunoAvatar} alt="Bruno - Estrategista de Marketing" className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 animate-float" />
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-card border border-primary/20 rounded-lg p-3 glow-primary animate-float">
              <div className="text-sm font-bold text-neon-green">Meta Ads Expert</div>
              <div className="text-xs text-muted-foreground">5+ anos exp.</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-accent/20 rounded-lg p-3 glow-accent animate-float" style={{
            animationDelay: '1s'
          }}>
              <div className="text-sm font-bold text-neon-purple">VSL Creator</div>
              <div className="text-xs text-muted-foreground">R$800k+ vendidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}