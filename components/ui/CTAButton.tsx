import { cn } from "@/lib/cn";
import { Link } from "@/i18n/navigation";

type CTAVariant = "primary" | "secondary" | "outline" | "outlineLight" | "ghost";
type CTASize = "sm" | "md" | "lg";

const variantClasses: Record<CTAVariant, string> = {
  primary:
    "bg-need-orange text-white hover:bg-need-orange-hover shadow-soft border border-transparent",
  secondary:
    "bg-need-green-900 text-white hover:bg-need-green-800 border border-transparent",
  outline:
    "bg-transparent text-need-ink border-2 border-need-green-800 hover:bg-need-green-100",
  outlineLight:
    "bg-transparent text-white border-2 border-white/80 hover:bg-white/10",
  ghost:
    "bg-white text-need-green-900 hover:bg-need-cream border border-need-border",
};

const sizeClasses: Record<CTASize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base",
};

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: CTAVariant;
  size?: CTASize;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
  "aria-label": ariaLabel,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-need-orange",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
