import type { Route } from "./+types/contact";
import { Section } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Document, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { PageHero } from "~/components/shared/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useTranslation } from "~/providers/TranslationProvider";
import { Footer } from "~/components/shared/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | Delgado Legal P.A. - Miami Lakes, FL" },
    { name: "description", content: "Contact DELGADO LEGAL, P.A. in Miami Lakes, FL. Call (786) 762-2389 or email michael@delgadolegalpa.com for real estate closings and legal services." },
  ];
}

const contactInfo = [
  {
    titleKey: "contact.info.phone",
    value: "(786) 762-2389",
    href: "tel:+17867622389",
    icon: "📞",
  },
  {
    titleKey: "contact.info.email",
    value: "michael@delgadolegalpa.com",
    href: "mailto:michael@delgadolegalpa.com",
    icon: "✉️",
  },
  {
    titleKey: "contact.info.location",
    valueKey: "contact.info.locationValue",
    href: "https://maps.app.goo.gl/aEVBbRF9mQwFji8x6",
    icon: "📍",
  },
  {
    titleKey: "contact.info.hours",
    valueKey: "contact.info.hoursValue",
    href: null,
    icon: "🕐",
  },
];

const serviceOptions = [
  { valueKey: "contact.form.services.realEstate", value: "real-estate" },
  { valueKey: "contact.form.services.foreclosure", value: "foreclosure" },
  { valueKey: "contact.form.services.commercial", value: "commercial" },
  { valueKey: "contact.form.services.estate", value: "estate" },
  { valueKey: "contact.form.services.divorce", value: "divorce" },
  { valueKey: "contact.form.services.other", value: "other" },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <PageHero
        subtitleKey="contact.hero.subtitle"
        titleKey="contact.hero.title"
        descriptionKey="contact.hero.description"
        decoratorIcon={<Document size={175} />}
      />

      {/* Contact Form Section */}
      <Section>
        <DecorativeElement position="top-left" opacity={0.55}>
          <ArtDecoCorner size={90} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="center-right" opacity={0.25}>
          <Scales size={200} color="var(--brand-navy)" />
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
                  <CardTitle>{t('contact.form.title')}</CardTitle>
                  <Text size="sm" muted>
                    {t('contact.form.subtitle')}
                  </Text>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          {t('contact.form.firstName')} <span className="text-destructive">{t('contact.form.required')}</span>
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
                          {t('contact.form.lastName')} <span className="text-destructive">{t('contact.form.required')}</span>
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
                        {t('contact.form.email')} <span className="text-destructive">{t('contact.form.required')}</span>
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
                        {t('contact.form.phone')}
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
                        {t('contact.form.serviceType')}
                      </label>
                      <select
                        id="caseType"
                        name="caseType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">{t('contact.form.selectService')}</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {t(option.valueKey)}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {t('contact.form.message')} <span className="text-destructive">{t('contact.form.required')}</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t('contact.form.messagePlaceholder')}
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
                      {t('contact.form.submit')}
                    </Button>
                    
                    <Text size="xs" muted className="text-center">
                      {t('contact.form.disclaimer')}
                    </Text>
                  </form>
                </CardContent>
              </Card>
            </SlideUpOnScroll>

            {/* Contact Information */}
            <div className="space-y-6">
              <SlideUpOnScroll delay={100}>
                <Heading as="h2" size="sm" className="mb-4">
                  {t('contact.info.title')}
                </Heading>
              </SlideUpOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <SlideUpOnScroll key={info.titleKey} delay={150 + index * 75}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <span className="text-2xl mb-2 block" aria-hidden="true">{info.icon}</span>
                        <Text as="span" className="font-semibold block mb-1">
                          {t(info.titleKey)}
                        </Text>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors whitespace-pre-line"
                          >
                            {info.valueKey ? t(info.valueKey) : info.value}
                          </a>
                        ) : (
                          <Text size="sm" muted className="whitespace-pre-line">
                            {info.valueKey ? t(info.valueKey) : info.value}
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
      </Section>
      <Footer />
    </>
  );
}
