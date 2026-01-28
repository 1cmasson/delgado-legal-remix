import type { Route } from "./+types/about";
import { ScrollSnapContainer, ScrollSection } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Column, Document, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Our Firm | Delgado Legal P.A." },
    { name: "description", content: "Learn about DELGADO LEGAL, P.A. - a full-service law firm in Miami Lakes, FL. Meet our attorneys Michael and Vanessa Delgado." },
  ];
}

const values = [
  {
    title: "Client-Centric",
    description: "Putting our clients first is the cornerstone of our practice. We prioritize your needs and goals, ensuring tailored solutions.",
    icon: "🎯",
  },
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards. Trust, honesty, and transparency are at the core of everything we do.",
    icon: "⚖️",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every case, providing top-tier legal representation no matter the complexity.",
    icon: "🏆",
  },
  {
    title: "Expertise",
    description: "With deep knowledge and extensive experience in various practice areas, we tackle the toughest legal challenges.",
    icon: "📚",
  },
  {
    title: "Personalized",
    description: "We understand each client's situation is unique. We provide personalized attention and guidance you need.",
    icon: "🤝",
  },
  {
    title: "Community",
    description: "We believe in giving back. Our commitment extends beyond the courtroom through community engagement.",
    icon: "❤️",
  },
];

const stats = [
  { value: "100+", label: "Successful Cases Handled" },
  { value: "15+", label: "Years Of Legal Excellence" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

export default function About() {
  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <ScrollSection className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <DecorativeElement position="top-left" opacity={0.60}>
          <ArtDecoCorner size={100} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55} className="animate-float-slow">
          <Scales size={280} color="var(--brand-navy)" />
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
              About Us
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6">
              Celebrating Our Clients' Victories
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" muted className="max-w-2xl mx-auto">
              Each success is proof of the trust our clients place in us. We're not just attorneys; we're partners in your success story.
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
          <Document size={250} color="var(--brand-navy)" />
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
                  Our Mission
                </Heading>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={100}>
                <Text className="mb-4">
                  At DELGADO LEGAL, P.A., our mission is to provide legal support and guidance to our clients and help them navigate complex legal challenges with confidence.
                </Text>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={200}>
                <Text muted>
                  We are committed to delivering high quality legal services that prioritize our clients' interests, ensuring their rights are protected, and their goals are achieved. Our mission is not just about practicing law; it's about making a positive impact on the lives of those we serve, one case at a time.
                </Text>
              </SlideUpOnScroll>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <SlideUpOnScroll key={stat.label} delay={100 + index * 100}>
                  <div className="text-center">
                    <Text className="text-5xl font-bold text-accent">{stat.value}</Text>
                    <Text size="sm" muted className="mt-3">{stat.label}</Text>
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
          <Column size={220} color="var(--brand-gold)" />
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
                What We Stand For
              </Text>
            </FadeInOnScroll>
            <SlideUpOnScroll delay={100}>
              <Heading as="h2" size="lg" className="mt-2">
                Our Core Values
              </Heading>
            </SlideUpOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <SlideUpOnScroll key={value.title} delay={100 + index * 75}>
                <Card className="text-center h-full bg-background hover:shadow-md transition-shadow">
                  <CardHeader>
                    <span className="text-4xl mb-2 block" aria-hidden="true">{value.icon}</span>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text size="sm" muted>{value.description}</Text>
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
          <Scales size={200} color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="bottom-left" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto text-center">
          <FadeInOnScroll>
            <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
              Meet the Team
            </Text>
          </FadeInOnScroll>
          <SlideUpOnScroll delay={100}>
            <Heading as="h2" size="lg" className="mt-2 mb-4">
              Our Attorneys
            </Heading>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={200}>
            <Text muted className="max-w-2xl mx-auto mb-8">
              Our team brings together diverse expertise and a shared commitment to client success. Meet attorneys Michael and Vanessa Delgado.
            </Text>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={300}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/attorneys">Meet Our Attorneys</Link>
            </Button>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>
    </ScrollSnapContainer>
  );
}
