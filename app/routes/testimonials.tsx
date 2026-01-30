import type { Route } from "./+types/testimonials";
import { ScrollSnapContainer, ScrollSection } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Column, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { useTranslation } from "~/providers/TranslationProvider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Client Testimonials | Delgado Legal P.A." },
    { name: "description", content: "Read what our clients say about working with Delgado Legal P.A. Real testimonials from realtors and homebuyers in South Florida." },
  ];
}

const testimonials = [
  {
    quote: "Thank you for being the BEST partner any realtor can ask for. You are amazing! Your professionalism and hard work is like no other. You remain in full control of the deal at all times. I can't thank you enough!",
    author: "Estrella P.",
    roleKey: "testimonials.roles.realtor",
    rating: 5,
    image: "/images/testimonials/delgado-customer-1.webp",
  },
  {
    quote: "First time I see an attorney bend over backwards for everyone involved in the transaction. I will keep in mind the way you work. Congratulations!",
    author: "Amada C.",
    roleKey: "testimonials.roles.realtor",
    rating: 5,
    image: "/images/testimonials/delgado-customer-3.webp",
  },
  {
    quote: "Michael, you helped big time. I haven't forgotten about you and what I have these types of sellers will always keep you 1st in line. Thank you kindly.",
    author: "Brenda A.",
    roleKey: "testimonials.roles.realEstateAgent",
    rating: 5,
    image: "/images/testimonials/delgado-customer-4.webp",
  },
  {
    quote: "Just a quick note to say Thank You for all your support during this process… 5 star service!!!",
    author: "A.T.",
    roleKey: "testimonials.roles.buyer",
    rating: 5,
    image: "/images/testimonials/delgado-customer-2.webp",
  },
  {
    quote: "You are the best!!! Can't thank you enough for everything!",
    author: "Gretel M.",
    roleKey: "testimonials.roles.buyer",
    rating: 5,
    image: "/images/testimonials/delgado-customer-5.webp",
  },
  {
    quote: "You are professional, thorough, and caring! It was great working with you!",
    author: "Aymee F.",
    roleKey: "testimonials.roles.buyer",
    rating: 5,
    image: "/images/testimonials/delgado-customer-1.webp",
  },
  {
    quote: "Thank you for making this a quick and painless process. You guys did a great job!",
    author: "Carlos R.",
    roleKey: "testimonials.roles.buyer",
    rating: 5,
    image: "/images/testimonials/delgado-customer-2.webp",
  },
  {
    quote: "Thank you again for everything. I'm so glad we met years ago and we've been able to work together. So diligently… efficiently… professional, just amazing!",
    author: "Katie M.",
    roleKey: "testimonials.roles.buyer",
    rating: 5,
    image: "/images/testimonials/delgado-customer-3.webp",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={i < rating ? "text-accent" : "text-muted"} 
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
              {t('testimonials.hero.subtitle')}
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6">
              {t('testimonials.hero.title')}
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" muted className="max-w-2xl mx-auto">
              {t('testimonials.hero.description')}
            </Text>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>

      {/* Testimonials Grid Section */}
      <ScrollSection>
        <DecorativeElement position="top-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="center-right" opacity={0.25}>
          <Column size={175} color="var(--brand-navy)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.25}>
          <Column size={175} color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.55}>
          <ArtDecoCorner size={80} corner="bottom-right" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <SlideUpOnScroll key={index} delay={50 + index * 75}>
                <Card className="bg-muted h-full hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="mt-4 flex flex-col flex-1">
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
                          <Text size="sm" muted>{t(testimonial.roleKey)}</Text>
                        </div>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection background="primary">
        <DecorativeElement position="top-left" opacity={0.60}>
          <ArtDecoCorner size={100} corner="top-left" color="white" />
        </DecorativeElement>
        <DecorativeElement position="center-left" opacity={0.25}>
          <Scales size={175} color="white" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.60}>
          <ArtDecoCorner size={100} corner="bottom-right" color="white" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto text-center">
          <SlideUpOnScroll>
            <Heading as="h2" size="lg" className="mb-6">
              {t('testimonials.cta.title')}
            </Heading>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={100}>
            <Text className="mb-10 text-primary-foreground/80 text-lg">
              {t('testimonials.cta.description')}
            </Text>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={200}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">{t('testimonials.cta.button')}</Link>
            </Button>
          </SlideUpOnScroll>
        </div>
      </ScrollSection>
    </ScrollSnapContainer>
  );
}
