import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { TestimonialCard } from "@/components/cards/Cards";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function TestimonialsConsentNote() {
  const t = useTranslations("Testimonials.consent");

  return (
    <section className="border-b border-need-border bg-need-cream">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-sm text-need-muted">
          <span className="font-semibold text-need-green-900">{t("label")}: </span>
          {t("body")}
        </p>
      </div>
    </section>
  );
}

export function TestimonialsQuotes({ items: sanityItems }: { items?: any[] }) {
  const t = useTranslations("Testimonials.quotes");
  
  const items = sanityItems && sanityItems.length > 0 
    ? sanityItems 
    : (t.raw("items") as Array<{
        quote: string;
        name: string;
        role: string;
        tone: "blue" | "green" | "orange";
      }>);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <TestimonialCard
              key={`quote-${index}`}
              quote={item.quote}
              name={item.name}
              role={item.role}
              tone={item.tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsRecognition() {
  const t = useTranslations("Testimonials.recognition");
  const platforms = t.raw("platforms") as Array<{
    name: string;
    subtitle: string;
    description: string;
    href: string;
    tone: "green" | "blue" | "orange";
  }>;

  const tones = {
    green: "bg-need-green-100",
    blue: "bg-need-blue-100",
    orange: "bg-need-orange-100",
  };

  return (
    <section className="bg-need-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "rounded-need p-6 shadow-card transition hover:brightness-95",
                tones[platform.tone],
              )}
            >
              <p className="text-lg font-bold text-need-ink">{platform.name}</p>
              <p className="mt-1 text-sm font-semibold text-need-green-800">
                {platform.subtitle}
              </p>
              <p className="mt-3 text-sm text-need-muted">{platform.description}</p>
              <p className="mt-4 text-sm font-semibold text-need-orange">
                {t("openLink")} ↗
              </p>
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-need-muted">{t("note")}</p>
        <div className="mt-6 flex justify-center">
          <CTAButton
            href={site.website}
            external
            variant="secondary"
            size="sm"
          >
            {t("websiteCta")}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsCta() {
  const t = useTranslations("Testimonials.cta");

  return (
    <section className="bg-need-green-900">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t("title")}</h2>
          <p className="mt-3 text-white/80">{t("subtitle")}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CTAButton href="/book">{t("book")}</CTAButton>
          <CTAButton href="/about" variant="outlineLight">
            {t("about")}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
