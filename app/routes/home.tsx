import type { Route } from "./+types/home";
import { ScrollSnapContainer, ScrollSection } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Column, Document, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Delgado Legal P.A. | Real Estate Attorney Miami Lakes, FL" },
    { name: "description", content: "DELGADO LEGAL, P.A. is a full-service law firm and licensed title agent in Miami Lakes, FL. Real estate closings, estate planning, foreclosure defense, and more." },
  ];
}

const practiceAreas = [
  {
    title: "Real Estate Closings",
    description: "Smooth real estate transactions from start to finish. Licensed title agent services for buyers, sellers, and agents.",
    icon: "🏠",
  },
  {
    title: "Foreclosure Defense",
    description: "Protecting your home and financial future with experienced legal advocacy.",
    icon: "🛡️",
  },
  {
    title: "Commercial Transactions",
    description: "Navigate complex business deals with confidence. Expert guidance for commercial property matters.",
    icon: "🏢",
  },
  {
    title: "Estate Planning",
    description: "Secure your family's future with wills, trusts, and comprehensive estate planning services.",
    icon: "📋",
  },
];

const testimonials = [
  {
    quote: "Thank you for being the BEST partner any realtor can ask for. You are amazing! Your professionalism and hard work is like no other.",
    author: "Estrella P.",
    role: "Realtor",
    image: "/images/testimonials/delgado-customer-1.webp",
  },
  {
    quote: "First time I see an attorney bend over backwards for everyone involved in the transaction. I will keep in mind the way you work!",
    author: "Amada C.",
    role: "Realtor",
    image: "/images/testimonials/delgado-customer-3.webp",
  },
  {
    quote: "Thank you for making this a quick and painless process. You guys did a great job!",
    author: "Carlos R.",
    role: "Buyer",
    image: "/images/testimonials/delgado-customer-2.webp",
  },
];

export default function Home() {
  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
        {/* Background Image - Containerized */}
        <div className="absolute inset-0 flex justify-center z-0">
          <div className="relative w-full max-w-7xl h-full">
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/backgrounds/hero/hero-mobile.webp" />
              <source media="(max-width: 1024px)" srcSet="/images/backgrounds/hero/hero-tablet.webp" />
              <img
                src="/images/backgrounds/hero/hero-desktop.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-primary/70" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <SlideUpOnScroll>
            <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-widest mb-4 block">
              Real Estate & Legal Solutions
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6 text-white">
              Your Trusted Partner for Real Estate and Legal Solutions
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" className="max-w-2xl mx-auto mb-10 text-white/80">
              DELGADO LEGAL, P.A. is a full-service law firm and licensed title agent providing expert real estate closings, estate planning, and a variety of legal services throughout South Florida.
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/practices">Our Services</Link>
              </Button>
            </div>
          </SlideUpOnScroll>
        </div>
      </section>

      {/* Practice Areas Section */}
      <ScrollSection background="muted" id="practices">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInOnScroll>
              <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
                Our Services
              </Text>
            </FadeInOnScroll>
            <SlideUpOnScroll delay={100}>
              <Heading as="h2" size="lg" className="mt-2 mb-4">
                Practice Areas
              </Heading>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={200}>
              <Text muted className="max-w-2xl mx-auto">
                We offer expert legal representation across multiple practice areas to meet your diverse needs.
              </Text>
            </SlideUpOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <SlideUpOnScroll key={area.title} delay={100 + index * 100}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full bg-background">
                  <CardHeader>
                    <span className="text-4xl mb-2 block" aria-hidden="true">{area.icon}</span>
                    <CardTitle className="group-hover:text-accent transition-colors">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>
            ))}
          </div>
          
          <SlideUpOnScroll delay={500}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/practices">View All Practice Areas</Link>
              </Button>
            </div>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>

      {/* About Section */}
      <ScrollSection id="about">
        <DecorativeElement position="top-left" opacity={0.25} className="animate-float">
          <Lines size={250} variant="diagonal" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55}>
          <ArtDecoCorner size={90} corner="top-right" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.55}>
          <ArtDecoCorner size={90} corner="bottom-left" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInOnScroll>
                <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
                  About Us
                </Text>
              </FadeInOnScroll>
              <SlideUpOnScroll delay={100}>
                <Heading as="h2" size="lg" className="mt-2 mb-6">
                  Your Trusted Legal Partner
                </Heading>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={200}>
                <Text className="mb-4">
                  At DELGADO LEGAL, P.A., we believe in celebrating our clients' victories. Each success story is proof of the trust our clients place in us.
                </Text>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={300}>
                <Text muted className="mb-8">
                  We're not just attorneys; we're partners in your success story. Whether you're buying your first home, planning for your family's future, or navigating a complex transaction, we provide personalized attention and clear communication throughout your case.
                </Text>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={400}>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/about">About Our Firm</Link>
                </Button>
              </SlideUpOnScroll>
            </div>
            <SlideUpOnScroll delay={200}>
              <div className="rounded-2xl aspect-video overflow-hidden shadow-xl">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/team/trusted-legal-attorney-mobile.webp" />
                  <source media="(max-width: 1024px)" srcSet="/images/team/trusted-legal-attorney-tablet.webp" />
                  <img
                    src="/images/team/trusted-legal-attorney-desktop.webp"
                    alt="Attorney consulting with client at Delgado Legal P.A."
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
            </SlideUpOnScroll>
          </div>
        </div>
      </ScrollSection>

      {/* Testimonials Section */}
      <ScrollSection background="muted" id="testimonials">
        <DecorativeElement position="top-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.55}>
          <ArtDecoCorner size={80} corner="bottom-right" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInOnScroll>
              <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
                Testimonials
              </Text>
            </FadeInOnScroll>
            <SlideUpOnScroll delay={100}>
              <Heading as="h2" size="lg" className="mt-2 mb-4">
                What Our Clients Say
              </Heading>
            </SlideUpOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <SlideUpOnScroll key={index} delay={100 + index * 150}>
                <Card className="bg-background h-full hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <blockquote className="flex flex-col flex-1">
                      <Text className="italic text-foreground/80">"{testimonial.quote}"</Text>
                      <footer className="flex items-center gap-3 mt-auto pt-4">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                          loading="lazy"
                        />
                        <div>
                          <Text as="cite" className="not-italic font-semibold block">
                            {testimonial.author}
                          </Text>
                          <Text size="sm" muted>{testimonial.role}</Text>
                        </div>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>
            ))}
          </div>
          
          <SlideUpOnScroll delay={500}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/testimonials">Read More Testimonials</Link>
              </Button>
            </div>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>

      {/* CTA Banner */}
      <ScrollSection background="accent-solid" size="compact">
        <DecorativeElement position="center-left" opacity={0.25}>
          <Column size={300} color="white" />
        </DecorativeElement>
        <DecorativeElement position="center-right" opacity={0.25}>
          <Column size={300} color="white" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto text-center">
          <SlideUpOnScroll>
            <Heading as="h2" size="lg" className="mb-6">
              Ready to Get Started?
            </Heading>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={100}>
            <Text className="mb-10 text-accent-foreground/80 text-lg">
              Contact us today to discuss your real estate transaction or legal matter.
            </Text>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={200}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>
    </ScrollSnapContainer>
  );
}
