import type { Route } from "./+types/faq";
import { ScrollSnapContainer, ScrollSection } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Document, Column, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { useTranslation } from "~/providers/TranslationProvider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ | Delgado Legal P.A. - Real Estate Closing Questions" },
    { name: "description", content: "Frequently asked questions about real estate closings, estate planning, and our legal services at Delgado Legal P.A. in Miami Lakes, FL." },
  ];
}

const faqCategories = [
  {
    key: "realEstate",
    questionKeys: ["whatIsClosing", "howLong", "whatToBring", "mobileClosings"],
  },
  {
    key: "realtors",
    questionKeys: ["howWork", "complexTransactions"],
  },
  {
    key: "estatePlanning",
    questionKeys: ["whyWill", "willVsTrust"],
  },
  {
    key: "general",
    questionKeys: ["schedule", "areas", "fees"],
  },
];

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <ScrollSection size="hero" className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <DecorativeElement position="top-left" opacity={0.60}>
          <ArtDecoCorner size={100} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55} className="animate-float-slow">
          <Scales size={175} color="var(--brand-navy)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.25}>
          <Lines size={180} variant="horizontal" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.60}>
          <ArtDecoCorner size={100} corner="bottom-right" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-4xl mx-auto text-center">
          <SlideUpOnScroll>
            <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-widest mb-4 block">
              {t('faq.hero.subtitle')}
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6">
              {t('faq.hero.title')}
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" muted className="max-w-2xl mx-auto">
              {t('faq.hero.description')}
            </Text>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>

      {/* FAQ Sections */}
      <ScrollSection>
        <DecorativeElement position="top-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="center-right" opacity={0.25}>
          <Document size={175} color="var(--brand-navy)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="bottom-left" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <SlideUpOnScroll key={category.key} delay={categoryIndex * 100}>
              <div>
                <Heading as="h2" size="sm" className="mb-4 text-accent">
                  {t(`faq.categories.${category.key}.title`)}
                </Heading>
                <Accordion type="single" collapsible className="w-full">
                  {category.questionKeys.map((questionKey, index) => (
                    <AccordionItem key={questionKey} value={`${category.key}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {t(`faq.categories.${category.key}.questions.${questionKey}.question`)}
                      </AccordionTrigger>
                      <AccordionContent>
                        <Text muted>{t(`faq.categories.${category.key}.questions.${questionKey}.answer`)}</Text>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </SlideUpOnScroll>
          ))}
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection background="muted">
        <DecorativeElement position="top-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.55} className="animate-float">
          <Column size={140} color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55}>
          <ArtDecoCorner size={80} corner="top-right" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto text-center">
          <SlideUpOnScroll>
            <Heading as="h2" size="lg" className="mb-6">
              {t('faq.cta.title')}
            </Heading>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={100}>
            <Text muted className="mb-10 text-lg">
              {t('faq.cta.description')}
            </Text>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={200}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">{t('faq.cta.button')}</Link>
            </Button>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>
    </ScrollSnapContainer>
  );
}
