import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Image } from "lucide-react";
export function CriativosVSLs() {
  const criativos = [{
    type: "VSL",
    title: "VSL de Saúde - Nacional",
    result: "R$500k em vendas",
    description: "VSL de 25min que converteu incrivelmente bem por meses",
    metrics: "25min • 100% IA • R$500k vendas",
    icon: Video,
    videoId: "jJ4q5h4LsSY"
  }, {
    type: "Criativo",
    title: "Criativos UGC + Hook Viral",
    result: "CPC 1,00 • CTR 6%",
    description: "Criativos em vídeo que trouxeram lucro a custo baixo",
    metrics: "UGC + IA • CPM < 30,00",
    icon: Image,
    videoId: "Qj5zGXNzPsU"
  }, {
    type: "VSL",
    title: "VSL de Saúde - EUA",
    result: "U$60k em vendas nos EUA",
    description: "VSL otimizada para conversar com público americano",
    metrics: "27min • 100% IA • U$60k vendas",
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
                    <Badge variant={criativo.type === 'VSL' ? 'default' : 'secondary'} className="text-xs">
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