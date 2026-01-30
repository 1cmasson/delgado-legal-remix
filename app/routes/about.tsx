import type { Route } from "./+types/about";
import { ScrollSnapContainer, ScrollSection } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Column, Document, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { useTranslation } from "~/providers/TranslationProvider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Our Firm | Delgado Legal P.A." },
    { name: "description", content: "Learn about DELGADO LEGAL, P.A. - a full-service law firm in Miami Lakes, FL. Meet our attorneys Michael and Vanessa Delgado." },
  ];
}

const valueKeys = [
  { key: "clientCentric", icon: "🎯" },
  { key: "integrity", icon: "⚖️" },
  { key: "excellence", icon: "🏆" },
  { key: "expertise", icon: "📚" },
  { key: "personalized", icon: "🤝" },
  { key: "community", icon: "❤️" },
];

const stats = [
  { value: "100+", labelKey: "about.stats.cases" },
  { value: "15+", labelKey: "about.stats.years" },
  { value: "98%", labelKey: "about.stats.satisfaction" },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <ScrollSection size="hero" className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <DecorativeElement position="top-left" opacity={0.60}>
          <ArtDecoCorner size={100} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55} className="animate-float-slow">
          <Scales size={200} color="var(--brand-navy)" />
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
              {t('about.hero.subtitle')}
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6">
              {t('about.hero.title')}
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" muted className="max-w-2xl mx-auto">
              {t('about.hero.description')}
            </Text>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>

      {/* Mission Section */}
      <ScrollSection>
        <DecorativeElement position="top-right" opacity={0.55}>
          <ArtDecoCorner size={80} corner="top-right" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="center-right" opacity={0.25}>
          <Document size={175} color="var(--brand-navy)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="bottom-left" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideUpOnScroll>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/team/team-together-mobile.webp" />
                  <source media="(max-width: 1024px)" srcSet="/images/team/team-together-tablet.webp" />
                  <img
                    src="/images/team/team-together-desktop.webp"
                    alt="Michael and Vanessa Delgado, attorneys at Delgado Legal P.A."
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
            </SlideUpOnScroll>
            <div>
              <SlideUpOnScroll>
                <Heading as="h2" size="lg" className="mb-6">
                  {t('about.mission.title')}
                </Heading>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={100}>
                <Text className="mb-4">
                  {t('about.mission.description1')}
                </Text>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={200}>
                <Text muted>
                  {t('about.mission.description2')}
                </Text>
              </SlideUpOnScroll>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <SlideUpOnScroll key={stat.labelKey} delay={100 + index * 100}>
                  <div className="text-center">
                    <Text className="text-5xl font-bold text-accent">{stat.value}</Text>
                    <Text size="sm" muted className="mt-3">{t(stat.labelKey)}</Text>
                  </div>
                </SlideUpOnScroll>
              ))}
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Values Section */}
      <ScrollSection background="muted" id="values">
        <DecorativeElement position="top-left" opacity={0.25} className="animate-float">
          <Column size={155} color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55}>
          <ArtDecoCorner size={90} corner="top-right" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.55}>
          <ArtDecoCorner size={90} corner="bottom-left" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInOnScroll>
              <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
                {t('about.values.subtitle')}
              </Text>
            </FadeInOnScroll>
            <SlideUpOnScroll delay={100}>
              <Heading as="h2" size="lg" className="mt-2">
                {t('about.values.title')}
              </Heading>
            </SlideUpOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueKeys.map((value, index) => (
              <SlideUpOnScroll key={value.key} delay={100 + index * 75}>
                <Card className="text-center h-full bg-background hover:shadow-md transition-shadow">
                  <CardHeader>
                    <span className="text-4xl mb-2 block" aria-hidden="true">{value.icon}</span>
                    <CardTitle>{t(`about.values.items.${value.key}.title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text size="sm" muted>{t(`about.values.items.${value.key}.description`)}</Text>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Meet Our Attorneys CTA Section */}
      <ScrollSection id="team">
        <DecorativeElement position="top-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.55} className="animate-float-slow">
          <Scales size={140} color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="bottom-left" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto text-center">
          <FadeInOnScroll>
            <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
              {t('about.team.subtitle')}
            </Text>
          </FadeInOnScroll>
          <SlideUpOnScroll delay={100}>
            <Heading as="h2" size="lg" className="mt-2 mb-4">
              {t('about.team.title')}
            </Heading>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={200}>
            <Text muted className="max-w-2xl mx-auto mb-8">
              {t('about.team.description')}
            </Text>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={300}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/attorneys">{t('about.team.cta')}</Link>
            </Button>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>
    </ScrollSnapContainer>
  );
}
