import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import whatsappIcon from "@/assets/WhatsApp.svg.webp";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <Button 
        variant="whatsapp" 
        size="lg"
        className="rounded-full w-16 h-16 p-0 glow-primary animate-pulse-glow"
        aria-label="Contatar Bruno Zafred via WhatsApp"
        asChild
      >
        <a 
          href="https://wa.me/5561999752578" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp com Bruno Zafred"
        >
          <img 
            src={whatsappIcon} 
            alt="Ícone do WhatsApp para contato direto" 
            className="w-8 h-8"
            loading="lazy"
            width="32"
            height="32"
          />
        </a>
      </Button>
    </div>
  );
}