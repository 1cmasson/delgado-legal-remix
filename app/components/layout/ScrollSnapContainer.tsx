import { cn } from "~/lib/utils";
import { Footer } from "~/components/shared/Footer";

interface ScrollSnapContainerProps {
  children: React.ReactNode;
  className?: string;
  includeFooter?: boolean;
}

export function ScrollSnapContainer({ children, className, includeFooter = true }: ScrollSnapContainerProps) {
  return (
    <div
      className={cn(
        "h-screen overflow-y-auto scroll-snap-container",
        className
      )}
    >
      {children}
      {includeFooter && <Footer />}
    </div>
  );
}
