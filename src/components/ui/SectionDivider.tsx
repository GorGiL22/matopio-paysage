import { cn } from "@/lib/utils";

type SectionDividerProps = {
  className?: string;
  /** Fond aligné sur la section au-dessus ou en dessous */
  bg?: "cream" | "white" | "forest";
};

const bgClasses = {
  cream: "bg-cream",
  white: "bg-white",
  forest: "bg-forest",
};

export function SectionDivider({ className, bg = "cream" }: SectionDividerProps) {
  return (
    <div className={cn(bgClasses[bg], className)} aria-hidden="true">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-charcoal/10" />
      </div>
    </div>
  );
}
