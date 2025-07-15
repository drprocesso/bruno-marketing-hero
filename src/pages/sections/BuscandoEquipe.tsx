import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MessageCircle, Play, Users, Target, Zap, ArrowRight } from "lucide-react";

export function BuscandoEquipe() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Próximo Passo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Quero entrar num <span className="text-gradient-secondary">time</span>.{" "}
            <br />E fazer <span className="text-gradient-primary">história</span> junto.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">O que estou buscando:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Gestor de Tráfego Sênior</h4>
                  <p className="text-muted-foreground text-sm">
                    Meta Ads, Google Ads, estratégias de performance e otimização de ROI
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Criativo Lead</h4>
                  <p className="text-muted-foreground text-sm">
                    Criação de criativos, VSLs, copy persuasiva e testes A/B
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                  <Users className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Dev de Soluções para Marketing</h4>
                  <p className="text-muted-foreground text-sm">
                    Automações, integrações, landing pages e ferramentas internas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-primary border-primary/20 glow-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-black mb-4 text-primary-foreground">
                Estou pronto para contribuir com:
              </h3>
              <div className="space-y-3 text-primary-foreground/90 mb-8">
                <div>✓ Performance comprovada em tráfego pago</div>
                <div>✓ Experiência em e vendas no Brasil e Exterior</div>
                <div>✓ Visão técnica e criativa combinadas</div>
                <div>✓ Capacidade de desenvolver soluções próprias</div>
                <div>✓ Mindset de crescimento e inovação</div>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                "Busco uma equipe que valorize performance, criatividade e domínio técnico. 
                Onde eu possa aplicar toda minha experiência e continuar evoluindo."
              </p>
            </CardContent>
          </Card>
        </div>

       
      </div>
    </section>
  );
}