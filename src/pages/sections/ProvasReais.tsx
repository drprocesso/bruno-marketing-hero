import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3 } from "lucide-react";
import placaComemoracaoImg from "@/assets/placa-comemoracao.jpg";
import kirvanoLogo from "@/assets/kirvano logo.png";
import kiwifyLogo from "@/assets/kiwify logo.png";
import lastlinkLogo from "@/assets/lastlink logo.png";

export function ProvasReais() {
  const cases = [
    {
      company: "Kirvano",
      value: "R$300.000",
      description: "Faturamento em Reais",
      metrics: "Vendas: 3.1k+ • ROAS: 3.7x",
      color: "neon-green",
      logo: kirvanoLogo
    },
    {
      company: "Kiwify",
      value: "$60.000",
      description: "Faturamento em Dólares",
      metrics: "Vendas: 1.2k+ • ROAS: 4.2x",
      color: "neon-blue",
      logo: kiwifyLogo
    },
    {
      company: "Lastlink",
      value: "R$60.000",
      description: "Faturamento em Reais",
      metrics: "Vendas: 1.1k+ • ROAS: 3.6x",
      color: "neon-purple",
      logo: lastlinkLogo
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Provas Reais de Performance
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Cases que <span className="text-gradient-primary">falam por si</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Mais de R$400.000 gerenciados em tráfego pago.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cases.map((case_, index) => {
            return (
              <Card key={index} className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-4 rounded-lg bg-white/100 border border-white/20 flex items-center justify-center w-24 h-24">
                      <img 
                        src={case_.logo} 
                        alt={`${case_.company} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Case Real
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-black">
                    {case_.company}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-4xl font-black text-${case_.color} mb-2`}>
                    {case_.value}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {case_.description}
                  </p>
                  <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 mb-4">
                    {case_.metrics}
                  </div>
                  
                  <div className="mt-4">
                    
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Dashboard fake */}
        <Card className="bg-gradient-to-r from-card/80 to-card/60 border-primary/20 glow-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-primary" />
              Projetos Concluídos - 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-neon-green mb-1">R$300k+</div>
                <div className="text-sm text-muted-foreground">Total Investido</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-neon-blue mb-1">4.2x</div>
                <div className="text-sm text-muted-foreground">ROI Médio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-neon-purple mb-1">R$2,14</div>
                <div className="text-sm text-muted-foreground">CPL Médio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-neon-pink mb-1">15%</div>
                <div className="text-sm text-muted-foreground">Conv. Média</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}