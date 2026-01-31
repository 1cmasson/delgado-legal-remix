import type { ReactNode } from "react";
import { Section } from "~/components/layout";
import { SlideUpOnScroll } from "~/components/effects";
import { DecorativeElement, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { useTranslation } from "~/providers/TranslationProvider";

type LinesVariant = "diagonal" | "horizontal" | "vertical";

interface PageHeroProps {
  subtitleKey: string;
  titleKey: string;
  descriptionKey: string;
  decoratorIcon?: ReactNode;
  decoratorIconOffset?: string;
  linesVariant?: LinesVariant;
  linesFlipped?: boolean;
  linesOffset?: string;
  linesSize?: number;
  swapDecoratorPositions?: boolean;
}

export function PageHero({
  subtitleKey,
  titleKey,
  descriptionKey,
  decoratorIcon,
  decoratorIconOffset,
  linesVariant = "diagonal",
  linesFlipped = false,
  linesOffset,
  linesSize = 200,
  swapDecoratorPositions = false,
}: PageHeroProps) {
  const { t } = useTranslation();

  return (
    <Section size="hero" className="!min-h-[300px] bg-gradient-to-br from-[#1e3a5f] to-[var(--brand-navy)] text-white">
      <DecorativeElement position="top-left" opacity={0.60}>
        <ArtDecoCorner size={100} corner="top-left" color="var(--brand-gold)" />
      </DecorativeElement>

      {decoratorIcon && (
        <DecorativeElement position={swapDecoratorPositions ? "bottom-left" : "top-right"} opacity={0.55} className={`animate-float-slow ${decoratorIconOffset ?? ""}`}>
          <div style={{ color: "var(--brand-gold)" }}>{decoratorIcon}</div>
        </DecorativeElement>
      )}

      <DecorativeElement position={swapDecoratorPositions ? "top-right" : "bottom-left"} opacity={0.25} className={linesOffset}>
        <div style={linesFlipped ? { transform: "scaleX(-1)" } : undefined}>
          <Lines size={linesSize} variant={linesVariant} color="var(--brand-gold)" />
        </div>
      </DecorativeElement>

      <DecorativeElement position="bottom-right" opacity={0.60}>
        <ArtDecoCorner size={100} corner="bottom-right" color="var(--brand-gold)" />
      </DecorativeElement>

      <div className="max-w-4xl mx-auto text-center">
        <SlideUpOnScroll>
          <Text as="span" size="sm" className="text-[var(--brand-gold)] font-semibold uppercase tracking-widest mb-4 block">
            {t(subtitleKey)}
          </Text>
        </SlideUpOnScroll>

        <SlideUpOnScroll delay={100}>
          <Heading as="h1" size="xl" className="mb-6">
            {t(titleKey)}
          </Heading>
        </SlideUpOnScroll>

        <SlideUpOnScroll delay={200}>
          <Text size="lg" className="max-w-2xl mx-auto text-gray-300">
            {t(descriptionKey)}
          </Text>
        </SlideUpOnScroll>
      </div>
    </Section>
  );
}
