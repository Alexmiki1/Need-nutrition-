import { cn } from "@/lib/cn";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  breadcrumbLabel?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  breadcrumbLabel,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "hero-gradient relative overflow-hidden text-white",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 amharic-watermark"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {breadcrumbs ? (
          <Breadcrumbs
            items={breadcrumbs}
            label={breadcrumbLabel}
            className="mb-6"
          />
        ) : null}
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold tracking-wide text-need-orange uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
