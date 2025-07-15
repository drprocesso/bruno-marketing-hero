import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 px-4 bg-gradient-to-t from-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Se você busca uma solução para{" "}
            <span className="text-gradient-primary">ampliar o seu negócio</span>...
          </h2>
          <p className="text-2xl text-gradient-secondary font-bold">
            fala comigo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="whatsapp" size="lg" className="group" asChild>
            <a href="https://wa.me/5561990442148" target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Conversar no WhatsApp
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm mb-4">
            Bruno.Marketing © 2025 • Especialista em Tráfego & Performance
          </p>
          <p className="text-xs text-muted-foreground">
            Desenvolvido com React, TypeScript e muito café ☕
          </p>
        </div>
      </div>
    </footer>
  );
}