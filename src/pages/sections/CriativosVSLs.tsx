import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Image } from "lucide-react";
import { useState } from "react";

export function CriativosVSLs() {
  const [selectedAd, setSelectedAd] = useState(1);
  
  const adsData = {
    1: {
      videoId: "Qj5zGXNzPsU",
      metrics: {
        ctr: "4,25%",
        cpc: "R$ 0,57",
        cpm: "R$ 24,17",
        cpa: "R$ 64,31",
        vendas: "484"
      },
      isUSD: false
    },
    2: {
      videoId: "NPjkG-jc2ZQ",
      metrics: {
        ctr: "6,00%",
        cpc: "R$ 4,08",
        cpm: "R$ 204,00",
        cpa: "R$ 160,32",
        vendas: "245"
      },
      isUSD: true
    },
    3: {
      videoId: "gC6G6grSOxw",
      metrics: {
        ctr: "5,46%",
        cpc: "R$ 3,98",
        cpm: "R$ 240,02",
        cpa: "R$ 154,58",
        vendas: "171"
      },
      isUSD: true
    }
  };
  const criativos = [{
    type: "VSL",
    title: "VSL de Saúde - Nacional",
    result: "R$ +400k em vendas",
    description: "VSL de 25min que converteu incrivelmente bem por meses",
    metrics: "25min • 100% IA • R$ +400k vendas",
    icon: Video,
    videoId: "jJ4q5h4LsSY"
  }, {
    type: "Criativo",
    title: "Criativos UGC + Hook Viral",
    result: `CTR ${adsData[selectedAd].metrics.ctr} • CPC ${adsData[selectedAd].metrics.cpc}`,
    description: "Criativos em vídeo que trouxeram lucro a custo baixo",
    metrics: `CTR ${adsData[selectedAd].metrics.ctr} • CPC ${adsData[selectedAd].metrics.cpc} • CPM ${adsData[selectedAd].metrics.cpm} • CPA ${adsData[selectedAd].metrics.cpa} • Vendas ${adsData[selectedAd].metrics.vendas}`,
    icon: Image,
    videoId: adsData[selectedAd].videoId,
    isUSD: adsData[selectedAd].isUSD,
    showAdButtons: true
  }, {
    type: "VSL",
    title: "VSL de Saúde - EUA",
    result: "U$ +25K em vendas nos EUA",
    description: "VSL otimizada para conversar com público americano",
    metrics: "27min • 100% IA • U$ +25K vendas",
    icon: Video,
    videoId: "zAFIULKaA7g"
  }];
  return <section id="criativos-vsls" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Criativos & VSLs de Performance
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Vídeos que <span className="text-gradient-secondary">realmente vendem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especialista em copy e edição de vídeos de vendas. Aqui você vê os que mais performaram e geraram resultados reais.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {criativos.map((criativo, index) => {
          const Icon = criativo.icon;
          return <Card key={index} className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant={criativo.type === 'VSL' ? 'default' : 'secondary'} className="text-xs">
                        {criativo.type}
                      </Badge>
                      {criativo.isUSD && <span className="text-xl">🇺🇸</span>}
                    </div>
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold mb-2">
                    {criativo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {criativo.showAdButtons && (
                    <div className="flex gap-2 mb-4">
                      <Button 
                        variant={selectedAd === 1 ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setSelectedAd(1)}
                        className="flex-1"
                      >
                        Ads 1
                      </Button>
                      <Button 
                        variant={selectedAd === 2 ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setSelectedAd(2)}
                        className="flex-1"
                      >
                        Ads 2
                      </Button>
                      <Button 
                        variant={selectedAd === 3 ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setSelectedAd(3)}
                        className="flex-1"
                      >
                        Ads 3
                      </Button>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <div className="text-primary font-bold text-lg mb-1">
                      {criativo.result}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {criativo.description}
                    </p>
                    <div className="text-xs text-muted-foreground bg-muted/50 rounded p-2 mb-4">
                      {criativo.metrics}
                    </div>
                  </div>
                  
                  <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${criativo.videoId}?modestbranding=1&rel=0&showinfo=0&controls=1`}
                      title={criativo.title}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

      </div>
    </section>;
}