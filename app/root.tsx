import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

import { ThemeProvider } from "~/providers/ThemeProvider";
import { TranslationProvider } from "~/providers/TranslationProvider";
import { Header } from "~/components/shared/Header";
import { TranslateWidget } from "~/components/shared/TranslateWidget";

const SITE_URL = "https://silly-gaufre-e5b859.netlify.app";

export const meta: Route.MetaFunction = () => [
  { title: "Delgado Legal P.A. | Real Estate Attorney Miami Lakes, FL" },
  { name: "description", content: "DELGADO LEGAL, P.A. is a full-service law firm and licensed title agent in Miami Lakes, FL. Real estate closings, estate planning, foreclosure defense, and more." },
  { property: "og:title", content: "Delgado Legal P.A. | Real Estate Attorney Miami Lakes, FL" },
  { property: "og:description", content: "DELGADO LEGAL, P.A. is a full-service law firm and licensed title agent in Miami Lakes, FL. Real estate closings, estate planning, foreclosure defense, and more." },
  { property: "og:image", content: `${SITE_URL}/og-image.png` },
  { property: "og:url", content: SITE_URL },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Delgado Legal P.A. | Real Estate Attorney Miami Lakes, FL" },
  { name: "twitter:description", content: "DELGADO LEGAL, P.A. is a full-service law firm and licensed title agent in Miami Lakes, FL." },
  { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
];

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Delgado Legal - Trusted legal representation for immigration, family law, criminal defense, and personal injury cases." />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function AppContent() {
  return (
    <>
      <Header />
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
