import type { Route } from "./+types/faq";
import { ScrollSnapContainer, ScrollSection } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Document, Column, Lines, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ | Delgado Legal P.A. - Real Estate Closing Questions" },
    { name: "description", content: "Frequently asked questions about real estate closings, estate planning, and our legal services at Delgado Legal P.A. in Miami Lakes, FL." },
  ];
}

const faqCategories = [
  {
    title: "Real Estate Closings",
    questions: [
      {
        question: "What is a real estate closing?",
        answer: "A real estate closing is the final step in a property transaction where ownership officially transfers from seller to buyer. As your title agent, we coordinate all parties, ensure documents are properly executed, funds are distributed, and the title is recorded.",
      },
      {
        question: "How long does a typical closing take?",
        answer: "Most residential closings take 30-45 days from contract to close. However, cash transactions can close much faster. We work efficiently to meet your timeline while ensuring all details are handled properly.",
      },
      {
        question: "What do I need to bring to closing?",
        answer: "Bring a valid government-issued photo ID (driver's license or passport). If you're the buyer, you'll also need a cashier's check or wire transfer for closing costs. We'll provide a detailed closing disclosure beforehand so you know the exact amount.",
      },
      {
        question: "Do you offer mobile closings?",
        answer: "Yes, we can arrange mobile closings at a location convenient for you, whether that's your home, office, or the property being purchased. Contact us to discuss arrangements.",
      },
    ],
  },
  {
    title: "Working With Realtors",
    questions: [
      {
        question: "How do you work with real estate agents?",
        answer: "We partner closely with realtors to ensure smooth transactions. We provide regular updates, quick turnaround on documents, and remain in full control of the deal from contract to closing. Many agents consider us their preferred closing partner.",
      },
      {
        question: "Can you handle difficult or complex transactions?",
        answer: "Absolutely. We have experience with a variety of complex situations including short sales, foreclosure purchases, estate sales, and transactions with title issues. We work to find solutions and keep deals on track.",
      },
    ],
  },
  {
    title: "Estate Planning",
    questions: [
      {
        question: "Why do I need a will?",
        answer: "A will ensures your assets are distributed according to your wishes and can name guardians for minor children. Without a will, state law determines how your property is divided, which may not align with your preferences.",
      },
      {
        question: "What's the difference between a will and a trust?",
        answer: "A will goes through probate court after death, while a trust can transfer assets immediately without court involvement. Trusts offer more privacy and can be useful for complex estates. We can help determine which is right for your situation.",
      },
    ],
  },
  {
    title: "General Questions",
    questions: [
      {
        question: "How do I schedule an appointment?",
        answer: "You can contact us by phone at (786) 762-2389, email at michael@delgadolegalpa.com, or use the contact form on our website. We typically respond within 24 hours.",
      },
      {
        question: "What areas do you serve?",
        answer: "We serve clients throughout South Florida, with our office located in Miami Lakes, FL. We handle closings across Miami-Dade, Broward, and Palm Beach counties.",
      },
      {
        question: "What are your fees?",
        answer: "Our fees vary depending on the type of transaction and its complexity. We provide transparent pricing upfront with no hidden fees. Contact us for a quote specific to your needs.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <ScrollSection className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <DecorativeElement position="top-left" opacity={0.60}>
          <ArtDecoCorner size={100} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55} className="animate-float-slow">
          <Scales size={250} color="var(--brand-navy)" />
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
              Resources
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6">
              Frequently Asked Questions
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" muted className="max-w-2xl mx-auto">
              Find answers to common questions about our services and the legal process.
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
          <Document size={250} color="var(--brand-navy)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="bottom-left" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <SlideUpOnScroll key={category.title} delay={categoryIndex * 100}>
              <div>
                <Heading as="h2" size="sm" className="mb-4 text-accent">
                  {category.title}
                </Heading>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`${category.title}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <Text muted>{item.answer}</Text>
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
          <Column size={200} color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="top-right" opacity={0.55}>
          <ArtDecoCorner size={80} corner="top-right" color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto text-center">
          <SlideUpOnScroll>
            <Heading as="h2" size="lg" className="mb-6">
              Still Have Questions?
            </Heading>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={100}>
            <Text muted className="mb-10 text-lg">
              Our team is here to help. Contact us for personalized answers to your legal questions.
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
