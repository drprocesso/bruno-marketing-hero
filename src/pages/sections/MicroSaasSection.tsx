import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Smartphone, FileText, Eye, Code, ShoppingCart, Calendar, Utensils } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "@/components/ProjectModal";

export function MicroSaasSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const produtos = [
    {
      name: "Connectafy",
      description: "Estrutura para agência de tráfego nichada para aluguel de kits de festas.",
      tech: "React, Supabase, Stripe",
      status: "Ativo",
      icon: Smartphone,
      color: "neon-purple",
      url: "https://connectafy.com.br/"
    },
    {
      name: "Dr. Processo",
      description: "Automatização de processos jurídicos com IA e envio via Whatsapp",
      tech: "n8n, Supabase, API integrations",
      status: "Ativo",
      icon: FileText,
      color: "neon-blue",
      url: "https://drprocesso.com.br/"
    }
  ];

  const projetosDemonstrativos = [
    {
      id: "pitstop",
      name: "PitStop Inventory",
      description: "Sistema de controle de estoque para oficinas automotivas",
      tech: "React, TypeScript, Supabase",
      icon: Code,
      color: "neon-green",
      url: "https://pitstop-inventory-control.lovable.app"
    },
    {
      id: "ecom-pulse",
      name: "Ecom Pulse Central",
      description: "Dashboard de analytics para e-commerce com métricas em tempo real",
      tech: "React, Charts, API Integration",
      icon: ShoppingCart,
      color: "neon-blue",
      url: "https://ecom-pulse-central.lovable.app"
    },
    {
      id: "burger-menu",
      name: "Dark Burger Menu",
      description: "Cardápio digital interativo para restaurantes com tema dark",
      tech: "React, CSS Animations, Responsive",
      icon: Utensils,
      color: "neon-purple",
      url: "https://dark-burger-menu.lovable.app"
    },
    {
      id: "barber-booking",
      name: "Estilo Barba Agendamento",
      description: "Sistema de agendamento para barbearias com gestão de horários",
      tech: "React, Calendar, Booking System",
      icon: Calendar,
      color: "neon-pink",
      url: "https://estilo-barba-agendamento.lovable.app"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Micro SaaS, Sites & Sistemas Completos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Criando <span className="text-gradient-primary">soluções que resolvem</span> problemas reais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Além de tráfego e marketing, desenvolvo micro SaaS, sites e automações. 
            Sistemas rápidos, tecnologias modernas e foco na solução do problema.
          </p>
        </div>

        {/* Produtos Principais */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {produtos.map((produto, index) => {
            const Icon = produto.icon;
            return (
              <Card key={index} className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${produto.color}/10 border border-${produto.color}/20`}>
                      <Icon className={`w-6 h-6 text-${produto.color}`} />
                    </div>
                    <Badge 
                      variant={produto.status === 'Ativo' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {produto.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-black mb-2">
                    {produto.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {produto.description}
                  </p>
                  <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 mb-4">
                    <strong>Tech Stack:</strong> {produto.tech}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group">
                    <a 
                      href={produto.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full justify-center"
                    >
                      Ver projeto
                    </a>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Projetos Demonstrativos */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Projetos <span className="text-gradient-secondary">Demonstrativos</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exemplos práticos de diferentes tipos de sistemas que desenvolvo. 
              Clique para explorar cada projeto em detalhes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {projetosDemonstrativos.map((projeto, index) => {
              const Icon = projeto.icon;
              return (
                <Card key={index} className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className={`p-3 rounded-lg bg-${projeto.color}/10 border border-${projeto.color}/20 w-fit mb-4`}>
                      <Icon className={`w-6 h-6 text-${projeto.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold mb-2">
                      {projeto.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {projeto.description}
                    </p>
                    <div className="text-xs text-muted-foreground bg-muted/50 rounded p-2 mb-4">
                      {projeto.tech}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="neonOutline" 
                        size="sm" 
                        className="flex-1 group"
                        onClick={() => setSelectedProject(projeto.id)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group"
                        asChild
                      >
                        <a href={projeto.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Sistemas Completos</h3>
              <p className="text-muted-foreground">
                Desenvolvo sites e sistemas funcionais em questão de dias. 
                Foco na entrega rápida e suporte pós venda.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="p-8 text-center">
              <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Automações Inteligentes</h3>
              <p className="text-muted-foreground">
                Uso n8n/make, Whatsapp, Supabase e integrações via API para criar automações 
                que economizam tempo e reduzem processos manuais.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        projectId={selectedProject}
        projects={projetosDemonstrativos}
      />
    </section>
  );
}