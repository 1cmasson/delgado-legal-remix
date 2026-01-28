import type { Route } from "./+types/contact";
import { ScrollSnapContainer, ScrollSection } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Document, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | Delgado Legal P.A. - Miami Lakes, FL" },
    { name: "description", content: "Contact DELGADO LEGAL, P.A. in Miami Lakes, FL. Call (786) 762-2389 or email michael@delgadolegalpa.com for real estate closings and legal services." },
  ];
}

const contactInfo = [
  {
    title: "Phone",
    value: "(786) 762-2389",
    href: "tel:+17867622389",
    icon: "📞",
  },
  {
    title: "Email",
    value: "michael@delgadolegalpa.com",
    href: "mailto:michael@delgadolegalpa.com",
    icon: "✉️",
  },
  {
    title: "Location",
    value: "Miami Lakes, FL\nServing South Florida",
    href: "https://maps.app.goo.gl/aEVBbRF9mQwFji8x6",
    icon: "📍",
  },
  {
    title: "Office Hours",
    value: "Mon-Fri: 9AM - 6PM\nSat: By Appointment",
    href: null,
    icon: "🕐",
  },
];

export default function Contact() {
  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <ScrollSection className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <DecorativeElement position="top-left" opacity={0.60}>
          <ArtDecoCorner size={100} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55} className="animate-float-slow">
          <Document size={250} color="var(--brand-navy)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.25}>
          <Lines size={180} variant="diagonal" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.60}>
          <ArtDecoCorner size={100} corner="bottom-right" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-4xl mx-auto text-center">
          <SlideUpOnScroll>
            <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-widest mb-4 block">
              Get in Touch
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6">
              Contact Us
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" muted className="max-w-2xl mx-auto">
              Ready to discuss your real estate closing or legal matter? Contact us today.
            </Text>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>

      {/* Contact Form Section */}
      <ScrollSection>
        <DecorativeElement position="top-left" opacity={0.55}>
          <ArtDecoCorner size={90} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="center-right" opacity={0.25}>
          <Scales size={280} color="var(--brand-navy)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.55}>
          <ArtDecoCorner size={90} corner="bottom-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.55}>
          <ArtDecoCorner size={90} corner="bottom-right" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SlideUpOnScroll>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <Text size="sm" muted>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </Text>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        aria-required="true"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="caseType" className="text-sm font-medium">
                        Type of Service
                      </label>
                      <select
                        id="caseType"
                        name="caseType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service...</option>
                        <option value="real-estate">Real Estate Closing</option>
                        <option value="foreclosure">Foreclosure Defense</option>
                        <option value="commercial">Commercial Transaction</option>
                        <option value="estate">Estate Planning</option>
                        <option value="divorce">Uncontested Divorce</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please describe your situation..."
                        rows={5}
                        required
                        aria-required="true"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Send Message
                    </Button>
                    
                    <Text size="xs" muted className="text-center">
                      By submitting this form, you agree to our privacy policy. Your information is kept confidential.
                    </Text>
                  </form>
                </CardContent>
              </Card>
            </SlideUpOnScroll>

            {/* Contact Information */}
            <div className="space-y-6">
              <SlideUpOnScroll delay={100}>
                <Heading as="h2" size="sm" className="mb-4">
                  Contact Information
                </Heading>
              </SlideUpOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <SlideUpOnScroll key={info.title} delay={150 + index * 75}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <span className="text-2xl mb-2 block" aria-hidden="true">{info.icon}</span>
                        <Text as="span" className="font-semibold block mb-1">
                          {info.title}
                        </Text>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors whitespace-pre-line"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <Text size="sm" muted className="whitespace-pre-line">
                            {info.value}
                          </Text>
                        )}
                      </CardContent>
                    </Card>
                  </SlideUpOnScroll>
                ))}
              </div>

              {/* Office Image */}
              <SlideUpOnScroll delay={400}>
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <picture>
                        <source media="(max-width: 640px)" srcSet="/images/backgrounds/hero/hero-mobile.webp" />
                        <source media="(max-width: 1024px)" srcSet="/images/backgrounds/hero/hero-tablet.webp" />
                        <img
                          src="/images/backgrounds/hero/hero-desktop.webp"
                          alt="Delgado Legal P.A. office in Miami Lakes, FL"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>

              {/* Map Placeholder */}
              <SlideUpOnScroll delay={500}>
                <Card id="location">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Text muted className="text-center p-8">
                        [Google Maps embed placeholder]
                      </Text>
                    </div>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>
            </div>
          </div>
        </div>
      </ScrollSection>
    </ScrollSnapContainer>
  );
}
