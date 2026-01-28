import type { Route } from "./+types/practices";
import { ScrollSnapContainer, ScrollSection } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Document, Column, Gavel, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Practice Areas | Delgado Legal P.A. - Real Estate Law Miami" },
    { name: "description", content: "Our practice areas: Real Estate Closings, Foreclosure Defense, Commercial Transactions, Estate Planning, and Uncontested Divorces. Serving South Florida." },
  ];
}

const practiceAreas = [
  {
    id: "real-estate",
    title: "Real Estate Closings",
    icon: "🏠",
    description: "Smooth real estate transactions from start to finish. As a licensed title agent, we handle all aspects of your residential closing with expertise and attention to detail.",
    services: [
      "Residential Closings",
      "Title Search & Insurance",
      "Purchase & Sale Contracts",
      "Settlement Services",
      "Refinancing",
      "For Sale By Owner (FSBO)",
    ],
  },
  {
    id: "foreclosure",
    title: "Foreclosure Defense",
    icon: "🛡️",
    description: "Protecting your home and financial future. We provide experienced legal advocacy to help you explore all available options.",
    services: [
      "Loan Modification Assistance",
      "Foreclosure Litigation",
      "Short Sale Negotiations",
      "Deed in Lieu Options",
      "Loss Mitigation",
      "Bankruptcy Alternatives",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Transactions",
    icon: "🏢",
    description: "Navigate complex business deals with confidence. Our team provides expert guidance for commercial property matters and business transactions.",
    services: [
      "Commercial Property Closings",
      "Lease Negotiations",
      "Business Asset Purchases",
      "Due Diligence Review",
      "Contract Drafting",
      "Title Services",
    ],
  },
  {
    id: "estate-planning",
    title: "Estate Planning",
    icon: "📋",
    description: "Secure your family's future with comprehensive estate planning services tailored to your unique situation and goals.",
    services: [
      "Wills & Trusts",
      "Power of Attorney",
      "Healthcare Directives",
      "Probate Assistance",
      "Asset Protection",
      "Estate Administration",
    ],
  },
  {
    id: "divorce",
    title: "Uncontested Divorces",
    icon: "📄",
    description: "Simple, efficient family transitions. We help couples who have reached agreement navigate the divorce process smoothly.",
    services: [
      "Uncontested Divorce Filing",
      "Settlement Agreements",
      "Property Division Docs",
      "Parenting Plans",
      "Name Changes",
      "Final Judgment Preparation",
    ],
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
  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <ScrollSection className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <DecorativeElement position="top-left" opacity={0.60}>
          <ArtDecoCorner size={100} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55} className="animate-float-slow">
          <Gavel size={250} color="var(--brand-navy)" />
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
              Our Services
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6">
              Practice Areas
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" muted className="max-w-2xl mx-auto">
              From real estate transactions to estate planning, we offer full-service legal expertise tailored to your needs.
            </Text>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>

      {/* Practice Area Sections */}
      {practiceAreas.map((area, index) => {
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
              <decoration.Component size={200} color={isEven ? "var(--brand-navy)" : "var(--brand-gold)"} />
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
                    <span className="text-5xl mb-4 block" aria-hidden="true">{area.icon}</span>
                  </SlideUpOnScroll>
                  <SlideUpOnScroll delay={100}>
                    <Heading as="h2" size="md" className="mb-4">
                      {area.title}
                    </Heading>
                  </SlideUpOnScroll>
                  <SlideUpOnScroll delay={200}>
                    <Text className="mb-6">
                      {area.description}
                    </Text>
                  </SlideUpOnScroll>
                  <SlideUpOnScroll delay={300}>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link to="/contact">Schedule Consultation</Link>
                    </Button>
                  </SlideUpOnScroll>
                </div>
                
                <SlideUpOnScroll delay={150} className={!isEven ? 'lg:col-start-1' : ''}>
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="text-lg">Services Include:</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {area.services.map((service) => (
                          <li key={service} className="flex items-center gap-2">
                            <span className="text-accent" aria-hidden="true">✓</span>
                            <Text size="sm">{service}</Text>
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
          <Column size={280} color="white" />
        </DecorativeElement>
        <DecorativeElement position="center-right" opacity={0.25}>
          <Column size={280} color="white" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.60}>
          <ArtDecoCorner size={100} corner="bottom-right" color="white" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto text-center">
          <SlideUpOnScroll>
            <Heading as="h2" size="lg" className="mb-6">
              Ready to Get Started?
            </Heading>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={100}>
            <Text className="mb-10 text-primary-foreground/80 text-lg">
              Contact us today to discuss your real estate transaction or legal matter.
            </Text>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={200}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>
    </ScrollSnapContainer>
  );
}
