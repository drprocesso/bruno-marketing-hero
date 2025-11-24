import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ShoppingCart, DollarSign, Target } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { ImageZoomModal } from "@/components/ImageZoomModal";
import dashboardKirvano from "@/assets/dashboard-kirvano.png";
import dashboardKiwify from "@/assets/dashboard-kiwify.png";
import dashboardLastlink from "@/assets/dashboard-lastlink.png";
import ads1 from "@/assets/ads1.png";
import ads2 from "@/assets/ads2.png";

export function ProvasReais() {
  const [zoomImage, setZoomImage] = useState<{ url: string; alt: string } | null>(null);
  const platforms = [{
    name: "Kirvano",
    description: "Plataforma Internacional",
    faturamento: "R$ 299.537,41",
    receita: "R$ 272.187,86",
    vendas: "3.238 vendas",
    periodo: "Total acumulado",
    screenshot: dashboardKirvano,
    badge: "Infoproduto",
    color: "neon-blue"
  }, {
    name: "Kiwify",
    description: "Plataforma Nacional",
    faturamento: "R$ 161.939,37",
    vendas: "3.122 vendas",
    periodo: "Valor líquido recebido",
    screenshot: dashboardKiwify,
    badge: "Infoproduto",
    color: "neon-green"
  }, {
    name: "Lastlink",
    description: "Afiliação",
    faturamento: "R$ 50.189,60",
    vendas: "564 vendas",
    total: "R$ 60.032",
    periodo: "Comissão recebida",
    screenshot: dashboardLastlink,
    badge: "Infoproduto",
    color: "neon-purple"
  }];
  return <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Dashboards Reais de Vendas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Números <span className="text-gradient-primary">reais</span>, não promessas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prints das plataformas onde vendi meus infoprodutos usando VSLs e copy persuasiva.
            Cada número aqui é resultado de estratégia, testes e muito tráfego.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => <Card key={index} className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-black">
                    {platform.name}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {platform.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Screenshot with browser chrome effect */}
                <div className="bg-card border border-border rounded-lg overflow-hidden mb-6 shadow-lg">
                  <div className="bg-muted/50 px-3 py-2 border-b border-border flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                    </div>
                    <div className="flex-1 text-xs text-muted-foreground text-center font-mono">
                      {platform.name.toLowerCase()}.com
                    </div>
                  </div>
                  <div className="relative aspect-video overflow-hidden bg-background cursor-pointer" onClick={() => setZoomImage({ url: platform.screenshot, alt: `Dashboard ${platform.name} mostrando ${platform.vendas} e faturamento de ${platform.faturamento}` })}>
                    <img src={platform.screenshot} alt={`Dashboard ${platform.name} mostrando ${platform.vendas} e faturamento de ${platform.faturamento}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <DollarSign className={`w-4 h-4 text-${platform.color}`} />
                      <span className="text-sm text-muted-foreground">Faturamento</span>
                    </div>
                    <span className={`text-lg font-black text-${platform.color}`}>
                      {platform.faturamento}
                    </span>
                  </div>
                  
                  {platform.receita && <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className={`w-4 h-4 text-${platform.color}`} />
                        <span className="text-sm text-muted-foreground">Receita Líquida</span>
                      </div>
                      <span className={`text-lg font-black text-${platform.color}`}>
                        {platform.receita}
                      </span>
                    </div>}
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className={`w-4 h-4 text-${platform.color}`} />
                      <span className="text-sm text-muted-foreground">Total de Vendas</span>
                    </div>
                    <span className={`text-lg font-black text-${platform.color}`}>
                      {platform.vendas}
                    </span>
                  </div>

                  <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
                    {platform.periodo}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Traffic Investment Card */}
        <Card className="bg-gradient-to-br from-card/80 to-card/60 border-border/50 overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div>
                <CardTitle className="text-3xl font-black mb-2">
                  Gestão de Tráfego Pago
                </CardTitle>
                <p className="text-muted-foreground">
                  Investimento real em Meta Ads para escalar vendas
                </p>
              </div>
              <Badge variant="secondary" className="text-xs">
                Facebook Ads
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Screenshot Carousel */}
              <Carousel 
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
                      <div className="bg-muted/50 px-3 py-2 border-b border-border flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                        </div>
                        <div className="flex-1 text-xs text-muted-foreground text-center font-mono">
                          business.facebook.com
                        </div>
                      </div>
                      <div className="relative aspect-video overflow-hidden bg-background cursor-pointer" onClick={() => setZoomImage({ url: ads1, alt: "Dashboard Facebook Ads mostrando R$ 409.633,40 investidos em tráfego pago" })}>
                        <img src={ads1} alt="Dashboard Facebook Ads mostrando R$ 409.633,40 investidos em tráfego pago" className="w-full h-full object-cover object-top" loading="lazy" />
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
                      <div className="bg-muted/50 px-3 py-2 border-b border-border flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                        </div>
                        <div className="flex-1 text-xs text-muted-foreground text-center font-mono">
                          business.facebook.com
                        </div>
                      </div>
                      <div className="relative aspect-video overflow-hidden bg-background cursor-pointer" onClick={() => setZoomImage({ url: ads2, alt: "Dashboard Facebook Ads segunda visualização" })}>
                        <img src={ads2} alt="Dashboard Facebook Ads segunda visualização" className="w-full h-full object-cover object-top" loading="lazy" />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              {/* Metrics */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20">
                  <div className="p-4 rounded-full bg-primary/20">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-primary">R$ 409.633,40</div>
                    <div className="text-sm text-muted-foreground">Valor gasto em uma conta</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg text-center">
                    <div className="text-2xl font-black text-neon-blue">2.628</div>
                    <div className="text-xs text-muted-foreground mt-1">Campanhas rodadas</div>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg text-center">
                    <div className="text-2xl font-black text-neon-green">3.49%</div>
                    <div className="text-xs text-muted-foreground mt-1">CTR médio geral</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Experiência prática em gestão de grandes volumes de tráfego, otimização de campanhas 
                  e scaling de resultados. Cada real investido é testado, analisado e otimizado.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Card */}
        <Card className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          
        </Card>
      </div>

      <ImageZoomModal 
        isOpen={!!zoomImage} 
        onClose={() => setZoomImage(null)} 
        imageUrl={zoomImage?.url || ""} 
        alt={zoomImage?.alt || ""} 
      />
    </section>;
}