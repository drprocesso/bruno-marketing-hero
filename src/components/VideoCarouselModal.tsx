import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Video {
  id: string;
  title: string;
}

interface VideoCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  videos: Video[];
}

export function VideoCarouselModal({ isOpen, onClose, videos }: VideoCarouselModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentVideo = videos[currentIndex];
  const embedUrl = `https://www.youtube.com/embed/${currentVideo?.id}?modestbranding=1&rel=0&showinfo=0&controls=1&disablekb=1&fs=1&iv_load_policy=3&cc_load_policy=0&playsinline=1&autohide=1`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 z-50 p-2 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={embedUrl}
              title={currentVideo?.title}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevVideo}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full"
              disabled={videos.length <= 1}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextVideo}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full"
              disabled={videos.length <= 1}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Video Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} de {videos.length}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}