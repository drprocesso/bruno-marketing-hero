import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, DollarSign, BarChart3 } from "lucide-react";
import placaComemoracaoImg from "@/assets/placa-comemoracao.jpg";

export function ProvasReais() {
  const cases = [
    {
      company: "Kirvano",
      value: "R$300.000",
      description: "Faturamento em lançamento",
      metrics: "CPL: R$3,12 • ROI: 4.2x • Conv: 12%",
      color: "neon-green",
      icon: TrendingUp
    },
    {
      company: "Kiwify",
      value: "R$160.000",
      description: "Vendas em perpétuo",
      metrics: "CPL: R$2,87 • ROI: 3.8x • Conv: 15%",
      color: "neon-blue",
      icon: Target
    },
    {
      company: "Lastlink",
      value: "R$60.000",
      description: "Otimização de funil",
      metrics: "CPL: R$1,95 • ROI: 5.1x • Conv: 18%",
      color: "neon-purple",
      icon: DollarSign
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
            const Icon = case_.icon;
            return (
              <Card key={index} className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${case_.color}/10 border border-${case_.color}/20`}>
                      <Icon className={`w-6 h-6 text-${case_.color}`} />
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
                    <img 
                      src={placaComemoracaoImg} 
                      alt="Placa de comemoração" 
                      className="w-full h-24 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                    />
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
              Performance Dashboard - Últimos 12 meses
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