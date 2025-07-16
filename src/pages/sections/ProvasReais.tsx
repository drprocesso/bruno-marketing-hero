import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3 } from "lucide-react";
import placaComemoracaoImg from "@/assets/placa-comemoracao.jpg";
import kirvanoLogo from "@/assets/gateway-logo.png";
import kiwifyLogo from "@/assets/ads-logo.png";
import lastlinkLogo from "@/assets/api-logo.png";

export function ProvasReais() {
  const cases = [
    {
      company: "Infoprodutos",
      value: "+R$800.000",
      description: "Como afiliado e produtor",
      metrics: "Vendas em Dolar e Real",
      color: "neon-green",
      logo: kirvanoLogo
    },
    {
      company: "Plataformas de Anúncio",
      value: "+R$500.000",
      description: "Investidos em tráfego",
      metrics: "Nos últimos 12 meses",
      color: "neon-blue",
      logo: kiwifyLogo
    },
    {
      company: "Automações",
      value: "+100 Sistemas",
      description: "Funis, sites e apps",
      metrics: "Whatsapp, N8N, APIs",
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Alguns dos desafios que enfrentei e conquistei experiência</p>
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
                        loading="lazy"
                        width="96"
                        height="96"
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
        
      </div>
    </section>
  );
}