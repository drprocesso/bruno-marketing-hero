import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, ArrowRight, Video, Image, TrendingUp } from "lucide-react";

export function CriativosVSLs() {
  const criativos = [
    {
      type: "VSL",
      title: "VSL de Lançamento - Produto Digital",
      result: "R$150k em vendas • 18% de conversão",
      description: "VSL de 45min que converteu incrivelmente bem no lançamento da Kitvano",
      metrics: "45min • 18% conv • R$150k vendas",
      icon: Video
    },
    {
      type: "Criativo",
      title: "Criativo UGC + Hook Viral",
      result: "3.200 leads • R$2,14 CPL",
      description: "Criativo em vídeo que viralizou e trouxe leads de alta qualidade",
      metrics: "UGC • 3.2k leads • R$2,14 CPL",
      icon: Image
    },
    {
      type: "VSL",
      title: "VSL de Vendas Perpétuas",
      result: "R$100k em vendas recorrentes",
      description: "VSL otimizada para conversão contínua em tráfego frio",
      metrics: "20min • 15% conv • Perpétuo",
      icon: Video
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Criativos & VSLs de Performance
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Criativos que <span className="text-gradient-secondary">realmente vendem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada criativo é testado, otimizado e comprovado. Aqui você vê os que mais performaram e geraram resultados reais.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {criativos.map((criativo, index) => {
            const Icon = criativo.icon;
            return (
              <Card key={index} className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant={criativo.type === 'VSL' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {criativo.type}
                    </Badge>
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold mb-2">
                    {criativo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-primary font-bold text-lg mb-1">
                      {criativo.result}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {criativo.description}
                    </p>
                    <div className="text-xs text-muted-foreground bg-muted/50 rounded p-2">
                      {criativo.metrics}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="neonOutline" size="sm" className="flex-1 group">
                      <Play className="w-4 h-4 mr-1" />
                      Ver {criativo.type}
                    </Button>
                    <Button variant="ghost" size="sm" className="group">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-secondary border-accent/20 glow-accent text-center">
          <CardContent className="py-12">
            <TrendingUp className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-black mb-4 text-foreground">
              Quer ver a estratégia completa?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada criativo tem uma estratégia por trás. Posso mostrar como penso os hooks, 
              angles, copy e otimizações que fazem a diferença na performance.
            </p>
            <Button variant="neon" size="lg" className="group">
              Ver estratégias detalhadas
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}