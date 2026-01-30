import type { Route } from "./+types/practices";
import { ScrollSnapContainer, ScrollSection } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Document, Column, Gavel, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { useTranslation } from "~/providers/TranslationProvider";
import { Home as HomeIcon, Shield, Building, ClipboardList, ScrollText, type LucideIcon } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Practice Areas | Delgado Legal P.A. - Real Estate Law Miami" },
    { name: "description", content: "Our practice areas: Real Estate Closings, Foreclosure Defense, Commercial Transactions, Estate Planning, and Uncontested Divorces. Serving South Florida." },
  ];
}

const practiceAreaKeys: { id: string; key: string; icon: LucideIcon; serviceKeys: string[] }[] = [
  {
    id: "real-estate",
    key: "realEstate",
    icon: HomeIcon,
    serviceKeys: ["residential", "titleSearch", "contracts", "settlement", "refinancing", "fsbo"],
  },
  {
    id: "foreclosure",
    key: "foreclosure",
    icon: Shield,
    serviceKeys: ["loanMod", "litigation", "shortSale", "deedInLieu", "lossMitigation", "bankruptcy"],
  },
  {
    id: "commercial",
    key: "commercial",
    icon: Building,
    serviceKeys: ["closings", "lease", "asset", "dueDiligence", "contracts", "title"],
  },
  {
    id: "estate-planning",
    key: "estate",
    icon: ClipboardList,
    serviceKeys: ["wills", "poa", "healthcare", "probate", "assetProtection", "administration"],
  },
  {
    id: "divorce",
    key: "divorce",
    icon: ScrollText,
    serviceKeys: ["filing", "settlement", "property", "parenting", "nameChange", "judgment"],
  },
];

const decorativeElements = [
  { Component: Scales, position: "top-right" as const },
  { Component: Document, position: "center-left" as const },
  { Component: Column, position: "bottom-right" as const },
  { Component: Gavel, position: "top-left" as const },
  { Component: Scales, position: "center-right" as const },
];

export default function Practices() {
  const { t } = useTranslation();

  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <ScrollSection size="hero" className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <DecorativeElement position="top-left" opacity={0.60}>
          <ArtDecoCorner size={100} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55} className="animate-float-slow">
          <Gavel size={175} color="var(--brand-navy)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.25}>
          <Lines size={200} variant="diagonal" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.60}>
          <ArtDecoCorner size={100} corner="bottom-right" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-4xl mx-auto text-center">
          <SlideUpOnScroll>
            <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-widest mb-4 block">
              {t('practices.hero.subtitle')}
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6">
              {t('practices.hero.title')}
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" muted className="max-w-2xl mx-auto">
              {t('practices.hero.description')}
            </Text>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>

      {/* Practice Area Sections */}
      {practiceAreaKeys.map((area, index) => {
        const decoration = decorativeElements[index % decorativeElements.length];
        const isEven = index % 2 === 0;
        
        return (
          <ScrollSection
            key={area.id}
            id={area.id}
            background={isEven ? "default" : "muted"}
          >
            <DecorativeElement 
              position="top-left" 
              opacity={0.55}
            >
              <ArtDecoCorner size={80} corner="top-left" color={isEven ? "var(--brand-gold)" : "var(--brand-gold)"} />
            </DecorativeElement>
            <DecorativeElement 
              position={decoration.position} 
              opacity={0.25} 
              className={index % 2 === 0 ? "animate-float" : "animate-float-slow"}
            >
              <decoration.Component size={140} color={isEven ? "var(--brand-navy)" : "var(--brand-gold)"} />
            </DecorativeElement>
            <DecorativeElement 
              position="bottom-right" 
              opacity={0.55}
            >
              <ArtDecoCorner size={80} corner="bottom-right" color={isEven ? "var(--brand-gold)" : "var(--brand-gold)"} />
            </DecorativeElement>
            
            <div className="max-w-6xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <SlideUpOnScroll>
                    <area.icon className="w-12 h-12 mb-4 text-accent" aria-hidden="true" />
                  </SlideUpOnScroll>
                  <SlideUpOnScroll delay={100}>
                    <Heading as="h2" size="md" className="mb-4">
                      {t(`practices.areas.${area.key}.title`)}
                    </Heading>
                  </SlideUpOnScroll>
                  <SlideUpOnScroll delay={200}>
                    <Text className="mb-6">
                      {t(`practices.areas.${area.key}.description`)}
                    </Text>
                  </SlideUpOnScroll>
                  <SlideUpOnScroll delay={300}>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link to="/contact">{t('practices.scheduleCta')}</Link>
                    </Button>
                  </SlideUpOnScroll>
                </div>
                
                <SlideUpOnScroll delay={150} className={!isEven ? 'lg:col-start-1' : ''}>
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="text-lg">{t('practices.servicesInclude')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {area.serviceKeys.map((serviceKey) => (
                          <li key={serviceKey} className="flex items-center gap-2">
                            <span className="text-accent" aria-hidden="true">✓</span>
                            <Text size="sm">{t(`practices.areas.${area.key}.services.${serviceKey}`)}</Text>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </SlideUpOnScroll>
              </div>
            </div>
          </ScrollSection>
        );
      })}

      {/* CTA Section */}
      <ScrollSection background="primary">
        <DecorativeElement position="top-left" opacity={0.60}>
          <ArtDecoCorner size={100} corner="top-left" color="white" />
        </DecorativeElement>
        <DecorativeElement position="center-left" opacity={0.25}>
          <Column size={200} color="white" />
        </DecorativeElement>
        <DecorativeElement position="center-right" opacity={0.25}>
          <Column size={200} color="white" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.60}>
          <ArtDecoCorner size={100} corner="bottom-right" color="white" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto text-center">
          <SlideUpOnScroll>
            <Heading as="h2" size="lg" className="mb-6">
              {t('practices.cta.title')}
            </Heading>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={100}>
            <Text className="mb-10 text-primary-foreground/80 text-lg">
              {t('practices.cta.description')}
            </Text>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={200}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">{t('practices.cta.button')}</Link>
            </Button>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>
    </ScrollSnapContainer>
  );
}
