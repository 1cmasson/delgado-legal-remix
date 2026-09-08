import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/source-sans-3";

import { ThemeProvider } from "~/providers/ThemeProvider";
import { TranslationProvider } from "~/providers/TranslationProvider";
import { Header } from "~/components/shared/Header";
import { TranslateWidget } from "~/components/shared/TranslateWidget";
import { JsonLd } from "~/components/seo/JsonLd";
import {
  generateOrganizationSchema,
  generateLegalServiceSchema,
  generateWebsiteSchema,
} from "~/lib/schema";
import { buildMeta } from "~/lib/seo";

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title: "Delgado Legal P.A. | Real Estate Attorney Miami Lakes, FL",
    description:
      "DELGADO LEGAL, P.A. is a full-service law firm and licensed title agent in Miami Lakes, FL. Real estate closings, estate planning, foreclosure defense, and more.",
  });

export const links: Route.LinksFunction = () => [
  // Favicons
  { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "icon", href: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  { rel: "icon", href: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  { rel: "manifest", href: "/site.webmanifest" },
];

/** The digital business cards are standalone landing pages, on their own route. */
function useIsStandaloneCard() {
  return useLocation().pathname.startsWith("/card/");
}

export function Layout({ children }: { children: React.ReactNode }) {
  // A card is handed out by link or QR code and has to open on the lockup, so
  // it opts out of scroll restoration and pins itself to the top instead.
  const isStandaloneCard = useIsStandaloneCard();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* A browser restores scroll before React hydrates — iOS Safari does it
            when it relaunches and reopens tabs — so the cards have to claim
            manual restoration here, in the head. An effect runs far too late:
            it only lands at `load`, leaving the whole parse window unguarded. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(location.pathname.startsWith("/card/"))history.scrollRestoration="manual"`,
          }}
        />
        <Meta />
        <Links />
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateLegalServiceSchema()} />
        <JsonLd data={generateWebsiteSchema()} />
      </head>
      <body>
        {children}
        {!isStandaloneCard && <ScrollRestoration />}
        <Scripts />
      </body>
    </html>
  );
}

function AppContent() {
  // The cards own the full viewport and carry their own header, so the site
  // nav would be noise.
  const isStandaloneCard = useIsStandaloneCard();

  return (
    <>
      {!isStandaloneCard && <Header />}
      <main id="main-content">
        <Outlet />
      </main>
      <TranslateWidget />
    </>
  );
}

export default function App() {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </TranslationProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
