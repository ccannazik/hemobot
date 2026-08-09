import Image from "next/image";
import { cn } from "@/lib/utils";

interface InnovationFigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
}

export function InnovationFigure({
  src,
  alt,
  width,
  height,
  caption,
  className,
}: InnovationFigureProps) {
  return (
    <figure className={cn("my-6", className)}>
      <div className="mx-auto max-w-lg">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-lg border border-slate-200 bg-white"
          sizes="(max-width: 768px) 100vw, 512px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
