import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, ArrowRight, Video, Image, TrendingUp } from "lucide-react";
import { useState } from "react";
import { VideoModal } from "@/components/VideoModal";
import { VideoCarouselModal } from "@/components/VideoCarouselModal";

export function CriativosVSLs() {
  const [vslModalOpen, setVslModalOpen] = useState(false);
  const [criativoModalOpen, setCriativoModalOpen] = useState(false);
  const [vslPerpetuoModalOpen, setVslPerpetuoModalOpen] = useState(false);

  const criativos = [
    {
      type: "VSL",
      title: "VSL de Saúde - Nacional",
      result: "R$300k em vendas",
      description: "VSL de 25min que converteu incrivelmente bem por meses",
      metrics: "25min • 100% IA • R$300k vendas",
      icon: Video,
      videoId: "jJ4q5h4LsSY",
      onButtonClick: () => setVslModalOpen(true)
    },
    {
      type: "Criativo",
      title: "Criativos UGC + Hook Viral",
      result: "CPC 1,00 • CTR 6%",
      description: "Criativos em vídeo que trouxeram lucro a custo baixo",
      metrics: "UGC + IA • CPM < 30,00",
      icon: Image,
      videos: [
        { id: "Qj5zGXNzPsU", title: "Criativo UGC 1" },
        { id: "NPjkG-jc2ZQ", title: "Criativo UGC 2" },
        { id: "gC6G6grSOxw", title: "Criativo UGC 3" }
      ],
      onButtonClick: () => setCriativoModalOpen(true)
    },
    {
      type: "VSL",
      title: "VSL de Saúde - EUA",
      result: "$60k em vendas nos EUA",
      description: "VSL otimizada para conversar com público americano",
      metrics: "27min • 100% IA • $60k vendas",
      icon: Video,
      videoId: "zAFIULKaA7g",
      onButtonClick: () => setVslPerpetuoModalOpen(true)
    }
  ];

  return (
    <section id="criativos-vsls" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Criativos & VSLs de Performance
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Vídeos que <span className="text-gradient-secondary">realmente vendem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada vídeo é testado, otimizado e comprovado. Aqui você vê os que mais performaram e geraram resultados reais.
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
                    <Button 
                      variant="neonOutline" 
                      size="sm" 
                      className="flex-1 group"
                      onClick={criativo.onButtonClick}
                    >
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
        
      </div>

      {/* Modals */}
      <VideoModal
        isOpen={vslModalOpen}
        onClose={() => setVslModalOpen(false)}
        videoId="jJ4q5h4LsSY"
        title="VSL de Lançamento - Produto Digital"
      />

      <VideoCarouselModal
        isOpen={criativoModalOpen}
        onClose={() => setCriativoModalOpen(false)}
        videos={[
          { id: "Qj5zGXNzPsU", title: "Criativo UGC 1" },
          { id: "NPjkG-jc2ZQ", title: "Criativo UGC 2" },
          { id: "gC6G6grSOxw", title: "Criativo UGC 3" }
        ]}
      />

      <VideoModal
        isOpen={vslPerpetuoModalOpen}
        onClose={() => setVslPerpetuoModalOpen(false)}
        videoId="zAFIULKaA7g"
        title="VSL de Vendas Perpétuas"
      />
    </section>
  );
}