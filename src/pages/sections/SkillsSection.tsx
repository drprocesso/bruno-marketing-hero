import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Facebook, Zap, Palette, Database, Bot, Smartphone } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Meta Ads & Tráfego",
      icon: Facebook,
      color: "neon-blue",
      skills: [
        "Tráfego frio e remarketing",
        "CBO e otimização de campanhas",
        "Públicos personalizados",
        "Análise de métricas avançadas",
        "Scaling de campanhas",
        "Business Manager expert"
      ]
    },
    {
      title: "Criação & Copy",
      icon: Palette,
      color: "neon-purple",
      skills: [
        "Vídeos de alta conversão",
        "Copywriting persuasiva",
        "Hooks e angles virais",
        "CapCut para vídeos",
        "Midjourney para imagens",
        "Canva para criativos"
      ]
    },
    {
      title: "Tech & Desenvolvimento",
      icon: Zap,
      color: "neon-green",
      skills: [
        "React e TypeScript",
        "Supabase (backend)",
        "n8n (automações)",
        "Bolt.new (prototipagem)",
        "APIs e integrações",
        "Webdesigner"
      ]
    }
  ];

  const tools = [
    { name: "Meta Business Manager", category: "Tráfego" },
    { name: "CapCut", category: "Criativo" },
    { name: "Midjourney", category: "Design" },
    { name: "Supabase", category: "Backend" },
    { name: "n8n", category: "Automação" },
    { name: "Canva", category: "Design" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Code" },
    { name: "BotConversa", category: "ChatBot" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Skills & Ferramentas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Arsenal <span className="text-gradient-primary">completo</span> para performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinação única de marketing, vendas e desenvolvimento. 
            Domínio técnico em todas as etapas do funil de vendas.
          </p>
        </div>

        {/* Main Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/20 w-fit mb-4`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <CardTitle className="text-xl font-black">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-${category.color}`}></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools Grid */}
        <Card className="bg-gradient-to-r from-card/80 to-card/60 border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl font-black text-center mb-4">
              Ferramentas que domino
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {tool.name}
                  <span className="ml-2 text-xs text-muted-foreground">
                    {tool.category}
                  </span>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Summary */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <CardContent className="p-8 text-center">
              <Database className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">5+ Anos</h3>
              <p className="text-muted-foreground">
                Experiência sólida em marketing digital, desde os primeiros testes 
                até campanhas de alto volume e performance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <CardContent className="p-8 text-center">
              <Bot className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Sempre Aprendendo</h3>
              <p className="text-muted-foreground">
                Constantemente explorando novas tecnologias, ferramentas e 
                estratégias para manter a performance sempre em alta.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}