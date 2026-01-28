import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("attorneys", "routes/attorneys.tsx"),
  route("practices", "routes/practices.tsx"),
  route("testimonials", "routes/testimonials.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
