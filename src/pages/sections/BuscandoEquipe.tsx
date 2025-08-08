import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Code, Zap, Bot, Users, Target, ArrowRight, CheckCircle } from "lucide-react";

export function BuscandoEquipe() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Desenvolvimento & Soluções
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Pronto para construir o próximo{" "}
            <span className="text-gradient-primary">case de sucesso</span> com você
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-muted-foreground">
              Desenvolvo sistemas que <strong>vendem</strong>, <strong>escalam</strong> e <strong>automatizam</strong>.
            </p>
            <p className="text-lg text-muted-foreground">
              De SaaS completos a estruturas de funis, chatbots, landing pages, VSLs, áreas de membros e dashboards interativos — tudo com foco em performance e experiência do usuário.
            </p>
          </div>
        </div>

        {/* Especialidades */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-6">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Criação de Micro SaaS e Ferramentas Internas
              </h3>
              <p className="text-muted-foreground mb-6">
                Soluções sob demanda para negócios digitais, com Supabase, Bolt.new, n8n e automações personalizadas.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Especialidade Principal</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 w-fit mb-6">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Desenvolvimento de Estruturas de Funil Completas
              </h3>
              <p className="text-muted-foreground mb-6">
                Sites, áreas de login, páginas de venda, checkout, e-mails e fluxos integrados — do zero ao faturamento.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Funil Completo</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="p-3 rounded-lg bg-neon-blue/10 border border-neon-blue/20 w-fit mb-6">
                <Bot className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Automação e Integração com IA e Chatbots
              </h3>
              <p className="text-muted-foreground mb-6">
                Bots conversacionais (WhatsApp), fluxos no n8n, APIs externas, OCR e inteligência aplicada.
              </p>
              <div className="flex items-center gap-2 text-neon-blue">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">IA & Automação</span>
              </div>
            </CardContent>
          </Card>
        </div>

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
                    que precisam de soluções práticas, rápidas e escaláveis.
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
                    sair do "feito à mão" e partir para automação com performance.
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
                    alguém que entrega tecnologia, design e marketing no mesmo pacote.
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
                  <span className="text-sm lg:text-base">Entendimento profundo do problema antes de codificar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Desenvolvimento ágil com entregas incrementais</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Foco em performance e experiência do usuário</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Suporte pós-entrega e melhorias contínuas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm lg:text-base">Documentação clara e treinamento da equipe</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground text-xs lg:text-sm italic mb-6">
                  "Não desenvolvo apenas código. Desenvolvo soluções que transformam negócios e geram resultados mensuráveis."
                </p>
                
                <div className="flex flex-col gap-4 justify-center">
                  <Button variant="whatsapp" size="default" className="group w-full" asChild>
                    <a href="https://wa.me/5561999752578" target="_blank" rel="noopener noreferrer">
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
    </section>
  );
}