import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, User, Bot } from "lucide-react";
import { useState, useEffect } from "react";

export function ChatSimulado() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showingAnswer, setShowingAnswer] = useState(false);

  const conversations = [
    {
      question: "Por que contratar você?",
      answer: "Porque combino performance comprovada com visão técnica. Não sou só um gestor de tráfego - sou alguém que entende o funil completo e pode criar as ferramentas que o negócio precisa."
    },
    {
      question: "Qual seu diferencial?",
      answer: "Resultados reais, adaptação rápida e capacidade de desenvolver soluções próprias. Quando encontro um gargalo, eu mesmo crio a ferramenta para resolvê-lo."
    },
    {
      question: "Como você se mantém atualizado?",
      answer: "Testo constantemente. Cada campanha é um laboratório. Além disso, desenvolvo meus próprios projetos para entender as tecnologias por dentro."
    },
    {
      question: "Qual o seu maior case?",
      answer: "R$300k faturados com a Kirvano em um infoproduto. Mas o que mais me orgulha é ter criado todo o ecossistema: desde o criativo até as automações de follow-up."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (showingAnswer) {
        setShowingAnswer(false);
        setCurrentMessageIndex((prev) => (prev + 1) % conversations.length);
      } else {
        setShowingAnswer(true);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [showingAnswer, conversations.length]);

  const currentConversation = conversations[currentMessageIndex];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            FAQ Interativo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Perguntas que sempre <span className="text-gradient-primary">fazem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Antecipando suas dúvidas com respostas diretas e honestas.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-card/80 to-card/60 border-border/50 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" />
              Chat com Bruno
              <div className="ml-auto flex gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Online</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Question */}
            <div className="flex gap-3 animate-slide-up">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-[80%]">
                <p className="text-sm">{currentConversation.question}</p>
              </div>
            </div>

            {/* Answer */}
            {showingAnswer && (
              <div className="flex gap-3 justify-end animate-slide-up">
                <div className="bg-primary rounded-lg rounded-tr-none p-3 max-w-[80%]">
                  <p className="text-sm text-primary-foreground">
                    {currentConversation.answer}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {!showingAnswer && (
              <div className="flex gap-3 justify-end">
                <div className="bg-primary/20 rounded-lg rounded-tr-none p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            )}

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 pt-4">
              {conversations.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentMessageIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}