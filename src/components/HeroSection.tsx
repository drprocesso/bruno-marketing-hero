import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Eye } from "lucide-react";
import brunoAvatar from "@/assets/bruno-avatar.jpg";

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
          
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Já investi mais de{" "}
            <span className="text-gradient-primary">R$300.000</span>{" "}
            em tráfego pago.
          </h1>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gradient-secondary">
            Agora, quero investir meu talento no seu projeto.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Especialista em tráfego, criativos que convertem e VSLs que vendem. 
            Cases reais de faturamento em lançamentos e perpétuo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="whatsapp" size="lg" className="group">
              <MessageCircle className="mr-2" />
              Falar comigo no WhatsApp
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="neonOutline" size="lg" className="group">
              <Eye className="mr-2" />
              Ver meus cases
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-black text-neon-green">R$300k+</div>
              <div className="text-sm text-muted-foreground">Investido em tráfego</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-neon-blue">4+</div>
              <div className="text-sm text-muted-foreground">Micro SaaS criados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-neon-purple">100+</div>
              <div className="text-sm text-muted-foreground">Criativos testados</div>
            </div>
          </div>
        </div>
        
        {/* Avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
            <img 
              src={brunoAvatar}
              alt="Bruno - Estrategista de Marketing"
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 animate-float"
            />
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-card border border-primary/20 rounded-lg p-3 glow-primary animate-float">
              <div className="text-sm font-bold text-neon-green">Meta Ads Expert</div>
              <div className="text-xs text-muted-foreground">5+ anos exp.</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-accent/20 rounded-lg p-3 glow-accent animate-float" style={{animationDelay: '1s'}}>
              <div className="text-sm font-bold text-neon-purple">VSL Creator</div>
              <div className="text-xs text-muted-foreground">R$350k+ vendidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}