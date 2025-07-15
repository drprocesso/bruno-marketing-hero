import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Smartphone, FileText } from "lucide-react";

export function MicroSaasSection() {
  const produtos = [
    {
      name: "Connectafy",
      description: "Estrutura para agência de tráfego nichada para aluguel de kits de festas.",
      tech: "React, Supabase, Stripe",
      status: "Ativo",
      icon: Smartphone,
      color: "neon-purple"
    },
     {
      name: "Sob Encomenda",
      description: "Dashboards de sistemas de vendas, gestão de estoque, aluguel...",
      tech: "React, Supabase, API, Gateway",
      status: "Desenvolvimento",
      icon: Zap,
      color: "neon-green"
    },
    {
      name: "Dr. Processo",
      description: "Automatização de processos jurídicos com IA e envio via Whatsapp",
      tech: "n8n, Supabase, API integrations",
      status: "Ativo",
      icon: FileText,
      color: "neon-blue"
    }  
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Micro SaaS, Sites & Sistemas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Criando <span className="text-gradient-primary">soluções que resolvem</span> problemas reais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Além de tráfego e marketing, desenvolvo micro SaaS, sites e automações. 
            Sistemas rápidos, tecnologias modernas e foco na solução do problema.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
                    Ver projeto
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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
                Uso n8n/make, Supabase e integrações via API para criar automações 
                que economizam tempo e reduzem processos manuais.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}