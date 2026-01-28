import { Link } from 'react-router';
import { cn } from '~/lib/utils';

const footerLinks = {
  services: [
    { name: 'Immigration Law', href: '/practices#immigration' },
    { name: 'Family Law', href: '/practices#family' },
    { name: 'Criminal Defense', href: '/practices#criminal' },
    { name: 'Personal Injury', href: '/practices#injury' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Attorneys', href: '/attorneys' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
  ],
  contact: [
    { name: '(555) 123-4567', href: 'tel:+15551234567' },
    { name: 'info@delgadolegal.com', href: 'mailto:info@delgadolegal.com' },
    { name: '123 Main Street, Suite 100', href: '/contact#location' },
    { name: 'City, State 12345', href: '/contact#location' },
  ],
};

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn('bg-primary text-primary-foreground', className)}
      aria-label="Site footer"
    >
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" aria-label="Delgado Legal - Home">
              <img
                src="/images/logos/white-long-logo.svg"
                alt="Delgado Legal"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Dedicated to providing exceptional legal services with integrity, 
              compassion, and commitment to our clients.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Delgado Legal. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
