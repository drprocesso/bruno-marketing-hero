import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, TrendingUp, Code, Users, Rocket } from "lucide-react";

export function Timeline() {
  const milestones = [
    {
      year: "2020",
      title: "Primeiro contato com tráfego",
      description: "Descobri o Meta Ads e comecei a estudar marketing digital",
      icon: Play,
      color: "neon-blue"
    },
    {
      year: "2021",
      title: "Primeiro Ecommerce",
      description: "Construí minha primeira loja virtual com produtos sem estoque",
      icon: TrendingUp,
      color: "neon-green"
    },
    {
      year: "2022",
      title: "R$100k em vendas",
      description: "Primeiro marco de 6 dígitos em faturamento gerenciado",
      icon: Rocket,
      color: "neon-purple"
    },
    {
      year: "2024",
      title: "Desenvolvimento de apps",
      description: "Comecei a desenvolver micro SaaS e automações completas",
      icon: Code,
      color: "neon-pink"
    },
    {
      year: "2025",
      title: "Em busca de equipe estratégica",
      description: "Pronto para aplicar toda experiência em um time vencedor",
      icon: Users,
      color: "neon-green"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Minha Jornada
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Linha do tempo <span className="text-gradient-secondary">profissional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De estudante curioso a especialista em performance. 
            Cada ano foi um degrau importante na minha evolução.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full bg-${milestone.color} flex items-center justify-center glow-primary`}>
                      <Icon className="w-4 h-4 text-background" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${isEven ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                    <Card className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className={`border-${milestone.color} text-${milestone.color}`}>
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}