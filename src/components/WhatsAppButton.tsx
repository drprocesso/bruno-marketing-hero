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
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </Button>
    </div>
  );
}