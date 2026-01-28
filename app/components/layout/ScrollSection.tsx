import { cn } from "~/lib/utils";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "muted" | "primary" | "accent" | "accent-solid";
  id?: string;
  size?: "default" | "compact";
}

const backgroundClasses = {
  default: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent/10",
  "accent-solid": "bg-accent text-accent-foreground",
};

export function ScrollSection({
  children,
  className,
  background = "default",
  id,
  size = "default",
}: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-section flex items-center justify-center relative overflow-hidden",
        size === "default" ? "min-h-screen" : "min-h-[50vh]",
        backgroundClasses[background],
        className
      )}
    >
      <div className="container mx-auto px-4 py-10 relative z-10">
        {children}
      </div>
    </section>
  );
}
