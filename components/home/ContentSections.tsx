import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { ServiceCard, TestimonialCard } from "@/components/cards/Cards";
import { TransformationsSection } from "@/components/home/TransformationsSection";
import { ResourcesPreview } from "@/components/home/ResourcesPreview";

export { ResourcesPreview };

export function FeaturedBanner() {
  const t = useTranslations("Home.banner");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="banner-gradient overflow-hidden rounded-need px-6 py-10 text-white shadow-soft sm:px-10 sm:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-sm font-semibold tracking-wide text-white/85 uppercase">
                {t("eyebrow")}
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("title")}</h2>
              <p className="mt-4 max-w-xl text-white/85">{t("body")}</p>
              <div className="mt-6">
                <CTAButton href="/partnerships" variant="ghost">
                  {t("cta")}
                </CTAButton>
              </div>
            </div>
            <div className="hidden aspect-square max-w-xs justify-self-end rounded-need bg-white/10 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PartnersCloud() {
  const t = useTranslations("Home.partners");
  const partners = t.raw("items") as string[];

  return (
    <section className="bg-need-green-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          tone="dark"
          className="mb-10"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex aspect-[3/2] items-center justify-center rounded-card bg-white px-3 text-center text-sm font-semibold text-need-ink"
            >
              {partner}
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CTAButton href="/partnerships">{t("cta")}</CTAButton>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsPreview() {
  const t = useTranslations("Testimonials.quotes");
  const items = (t.raw("items") as Array<{
    quote: string;
    name: string;
    role: string;
    tone: "blue" | "green" | "orange";
  }>).slice(0, 3);

  return (
    <>
      <TransformationsSection variant="home" showCta={false} />
      <section className="bg-need-cream">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {items.map((item, index) => (
              <TestimonialCard
                key={`home-quote-${index}`}
                quote={item.quote}
                name={item.name}
                role={item.role}
                tone={item.tone}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CTAButton href="/testimonials" variant="secondary">
              {t("title")}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

export function ServicesPreview() {
  const t = useTranslations("Home.services");
  const items = t.raw("items") as Array<{ slug: string; title: string }>;

  return (
    <section className="bg-need-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-10"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <ServiceCard
              key={item.slug}
              title={item.title}
              cta={t("cta")}
              href={`/services/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
