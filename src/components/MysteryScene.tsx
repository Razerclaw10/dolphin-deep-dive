import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, RotateCcw } from "lucide-react";

interface InfoBox {
  title: string;
  content: string;
}

interface MysterySceneProps {
  sceneNumber: number;
  totalScenes: number;
  title: string;
  description: string;
  factoid: string;
  infoBoxes?: InfoBox[];
  image: string;
  buttonText: string;
  onNext: () => void;
  onRestart?: () => void;
  isFinal?: boolean;
}

export function MysteryScene({
  sceneNumber,
  totalScenes,
  title,
  description,
  factoid,
  infoBoxes,
  image,
  buttonText,
  onNext,
  onRestart,
  isFinal = false,
}: MysterySceneProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={cn(
      "w-full flex flex-col items-center p-4 md:p-8 animate-fade-in",
      isFinal ? "min-h-screen py-16 overflow-y-auto" : "min-h-screen justify-center"
    )}>
      {/* Progress indicator */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {Array.from({ length: totalScenes }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              i < sceneNumber
                ? "bg-coral scale-110"
                : i === sceneNumber
                ? "bg-primary"
                : "bg-muted"
            )}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="max-w-4xl w-full space-y-6">
        {/* Scene title */}
        <div className="text-center space-y-2">
          <span className="text-sm font-body text-muted-foreground uppercase tracking-widest">
            Clue {sceneNumber + 1} of {totalScenes}
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground text-shadow-mystery">
            {title}
          </h1>
        </div>

        {/* Image container */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main image - uses object-cover to fill container */}
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-[35vh] object-cover transition-transform duration-500",
              isHovering && "scale-105"
            )}
          />
          
          {/* Magnifying glass overlay on hover */}
          {!isFinal && (
            <div
              className={cn(
                "absolute inset-0 bg-oil/20 flex items-center justify-center transition-opacity duration-300",
                isHovering ? "opacity-100" : "opacity-0"
              )}
            >
              <Search className="w-16 h-16 text-foam animate-float" />
            </div>
          )}
        </div>

        {/* Description */}
        <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
          <p className="text-lg md:text-xl font-body text-card-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Factoid box - only show if factoid exists */}
        {factoid && (
          <div className="bg-primary/10 rounded-xl p-5 border-l-4 border-coral">
            <div className="flex items-start gap-3">
              <div className="bg-coral rounded-full p-2 shrink-0">
                <Search className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  Investigation Note
                </h3>
                <p className="text-muted-foreground font-body">{factoid}</p>
              </div>
            </div>
          </div>
        )}

        {/* Info boxes - styled differently for final page */}
        {infoBoxes && infoBoxes.length > 0 && (
          <div className="space-y-4 mt-6">
            {infoBoxes.map((box, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-lg border border-border"
              >
                <h3 className="font-display font-bold text-xl text-primary mb-3">
                  {box.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">{box.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          {!isFinal && (
            <Button
              onClick={onNext}
              size="lg"
              className="group animate-pulse-glow"
            >
              <span className="font-display text-lg">{buttonText}</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
          
          {isFinal && onRestart && (
            <Button
              onClick={onRestart}
              variant="outline"
              size="lg"
              className="group"
            >
              <RotateCcw className="mr-2 w-5 h-5 transition-transform group-hover:-rotate-180 duration-500" />
              <span className="font-display text-lg">Start Over</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
