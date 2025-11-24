import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
}

export function ImageZoomModal({ isOpen, onClose, imageUrl, alt }: ImageZoomModalProps) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 1));
  };

  const handleClose = () => {
    setZoom(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-0">
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="absolute top-4 left-4 z-50 flex gap-2">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 1}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 3}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <div className="px-3 py-2 rounded-full bg-white/10 text-white text-sm">
              {Math.round(zoom * 100)}%
            </div>
          </div>

          <div className="overflow-auto w-full h-full p-8">
            <img
              src={imageUrl}
              alt={alt}
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease-out' }}
              className="max-w-full h-auto mx-auto"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
