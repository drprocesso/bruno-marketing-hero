import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Code, Zap, Bot, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
export function BuscandoEquipe() {
  return <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Copy & Gestão de Tráfego
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Pronto para construir o próximo{" "}
            <span className="text-gradient-primary">case de sucesso</span> com você
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-muted-foreground">
              Escrevo textos persuasivos que vendem, escalam e geram lucro
            </p>
            <p className="text-lg text-muted-foreground">
              De copy para landing pages e VSL's a criativos - tudo com foco em alta performance e conversão.
            </p>
          </div>
        </div>

        {/* Especialidades */}
        

        {/* Para quem é o trabalho */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">Para quem é meu trabalho?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 mt-1 flex-shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Produtores, agências e empresas</h4>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    que precisam de copies persuasivas e campanhas de alta performance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 mt-1 flex-shrink-0">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Negócios que querem evoluir</h4>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    sair do tráfego orgânico e escalar com tráfego pago e textos que convertem.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-neon-blue/10 border border-neon-blue/20 mt-1 flex-shrink-0">
                  <Users className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Equipes que buscam completude</h4>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    alguém que entende de copy, criativos e tráfego pago no mesmo pacote.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-neon-blue/10 border-primary/20 glow-primary">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-2xl font-black mb-6 text-center">
                Minha abordagem de trabalho:
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Entendimento profundo do público-alvo antes de escrever</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Copy estratégica baseada em gatilhos mentais e persuasão</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Foco em conversão e resultados mensuráveis (ROI/ROAS)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Testes A/B contínuos e otimização de campanhas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Análise de métricas e relatórios de performance</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground text-xs lg:text-sm italic mb-6">
                  "Não escrevo apenas textos. Crio estratégias de copy e tráfego que transformam cliques em vendas e geram resultados mensuráveis."
                </p>
                
                <div className="flex flex-col gap-4 justify-center">
                  <Button variant="whatsapp" size="default" className="group w-full" asChild>
                    <a href="https://wa.me/5561998500950" target="_blank" rel="noopener noreferrer">
                      <MessageCircle />
                      <span className="text-sm">Vamos conversar sobre seu projeto</span>
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}