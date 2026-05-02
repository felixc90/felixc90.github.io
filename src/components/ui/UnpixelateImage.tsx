import React, { useEffect, useRef } from "react";

interface UnpixelateImageProps {
  src: string;
  alt?: string;
  className?: string;
  duration?: number;
  placeholder?: React.ReactNode;
}

const UnpixelateImage = ({
  src,
  className = "",
  duration = 2500,
}: UnpixelateImageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      // Use full natural resolution internally
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d")!;

      const steps = Array.from({ length: 8 }, (_, i) =>
        Math.pow(10, -2.3 + (i / 7) * 2.3),
      );
      let i = 0;

      const drawStep = () => {
        const size = steps[i];
        const w = Math.max(1, Math.round(canvas.width * size));
        const h = Math.max(1, Math.round(canvas.height * size));

        offscreen.width = w;
        offscreen.height = h;
        offCtx.drawImage(img, 0, 0, w, h);

        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(offscreen, 0, 0, w, h, 0, 0, canvas.width, canvas.height);

        i++;
        if (i < steps.length) {
          setTimeout(drawStep, duration / steps.length);
        } else {
          ctx.imageSmoothingEnabled = true;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      };

      drawStep();
    };
  }, [src, duration]);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
};

export default UnpixelateImage;
