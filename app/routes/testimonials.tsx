import type { Route } from "./+types/testimonials";
import { Section } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";

import { CTABanner } from "~/components/shared/CTABanner";
import { Heading, Text } from "~/components/shared/Typography";
import { PageHero } from "~/components/shared/PageHero";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { InitialsAvatar } from "~/components/ui/avatar";
import { Link } from "react-router";
import { useTranslation } from "~/providers/TranslationProvider";
import { Footer } from "~/components/shared/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Client Testimonials | Delgado Legal P.A." },
    { name: "description", content: "Read what our clients say about working with Delgado Legal P.A. Real testimonials from realtors and homebuyers in South Florida." },
  ];
}

interface Testimonial {
  quote: string;
  author: string;
  roleKey: string;
  rating: number;
  image: string;
}

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
  const { t, tRaw } = useTranslation();
  
  const testimonials = tRaw<Testimonial[]>('testimonials.items') || [];

  // Track which images have been used to avoid duplicates
  const usedImages = new Set<string>();
  const getImageOrAvatar = (testimonial: Testimonial) => {
    if (usedImages.has(testimonial.image)) {
      return null; // Image already used, show avatar instead
    }
    usedImages.add(testimonial.image);
    return testimonial.image;
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        subtitleKey="testimonials.hero.subtitle"
        titleKey="testimonials.hero.title"
        descriptionKey="testimonials.hero.description"
      />

      {/* Testimonials Grid Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              const imageSrc = getImageOrAvatar(testimonial);
              return (
                <SlideUpOnScroll key={index} delay={50 + index * 75}>
                  <Card className="bg-muted h-full hover:shadow-md transition-shadow">
                    <CardContent className="pt-6 h-full flex flex-col">
                      <StarRating rating={testimonial.rating} />
                      <blockquote className="mt-4 flex flex-col flex-1">
                        <Text className="italic text-foreground/80">"{testimonial.quote}"</Text>
                        <footer className="flex items-center gap-3 mt-auto pt-4">
                          {imageSrc ? (
                            <img
                              src={imageSrc}
                              alt=""
                              className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                              loading="lazy"
                            />
                          ) : (
                            <InitialsAvatar
                              name={testimonial.author}
                              className="w-12 h-12 text-sm"
                            />
                          )}
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
              );
            })}
          </div>
        </div>
      </Section>

      <CTABanner translationKeyPrefix="testimonials.cta" />
      <Footer />
    </>
  );
}
