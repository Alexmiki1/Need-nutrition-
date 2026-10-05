import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { serviceSlugs, serviceTones, type ServiceSlug } from "@/lib/services";
import { cn } from "@/lib/cn";

const toneClasses = {
  green: "bg-need-green-100 text-need-green-900",
  blue: "bg-need-blue-100 text-need-blue",
  orange: "bg-need-orange-100 text-need-orange",
};

export function ServicesIndexGrid() {
  const t = useTranslations("Services");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("index.eyebrow")}
          title={t("index.title")}
          subtitle={t("index.subtitle")}
          align="center"
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceSlugs.map((slug) => (
            <article
              key={slug}
              className={cn(
                "flex h-full flex-col rounded-need p-6 shadow-card",
                toneClasses[serviceTones[slug]],
              )}
            >
              <h2 className="text-xl font-bold">{t(`items.${slug}.title`)}</h2>
              <p className="mt-3 flex-1 text-sm opacity-80">
                {t(`items.${slug}.summary`)}
              </p>
              <div className="mt-6">
                <CTAButton href={`/services/${slug}`} size="sm" variant="secondary">
                  {t("index.viewService")}
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-need bg-need-green-900 px-6 py-8 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">{t("index.ctaTitle")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            {t("index.ctaSubtitle")}
          </p>
          <div className="mt-6">
            <CTAButton href="/book">{t("common.bookCta")}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceDetailContentProps = {
  slug: ServiceSlug;
};

export function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
  const t = useTranslations("Services");
  const audience = t.raw(`items.${slug}.audience`) as string[];
  const approach = t.raw(`items.${slug}.approach`) as string[];
  const benefits = t.raw(`items.${slug}.benefits`) as string[];
  const faqs = t.raw(`items.${slug}.faqs`) as FAQItem[];
  const related = t.raw(`items.${slug}.related`) as Array<{
    title: string;
    href: string;
  }>;

  const otherServices = serviceSlugs.filter((item) => item !== slug);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHeading
                eyebrow={t("common.descriptionLabel")}
                title={t(`items.${slug}.title`)}
                subtitle={t(`items.${slug}.description`)}
              />
            </div>
            <aside
              className={cn(
                "rounded-need p-6 shadow-card",
                toneClasses[serviceTones[slug]],
              )}
            >
              <h2 className="text-lg font-bold">{t("common.whoFor")}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {audience.map((item, index) => (
                  <li key={`audience-${index}`} className="flex gap-2">
                    <span aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTAButton href="/book" size="sm">
                  {t("common.bookCta")}
                </CTAButton>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-need-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("common.approachLabel")}
            title={t("common.approachTitle")}
            subtitle={t(`items.${slug}.approachIntro`)}
            className="mb-8"
          />
          <ol className="grid gap-4 md:grid-cols-2">
            {approach.map((step, index) => (
              <li
                key={`approach-${index}`}
                className="flex gap-4 rounded-card bg-white p-5 shadow-card"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-need-green-900 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-2 text-need-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("common.benefitsLabel")}
            title={t("common.benefitsTitle")}
            className="mb-8"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article
                key={`benefit-${index}`}
                className="rounded-card border border-need-border bg-need-cream p-5"
              >
                <p className="font-semibold text-need-green-900">{benefit}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-need-muted">{t("common.disclaimer")}</p>
        </div>
      </section>

      <section className="bg-need-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("common.faqLabel")}
            title={t("common.faqTitle")}
            className="mb-8"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("common.relatedLabel")}
            title={t("common.relatedTitle")}
            className="mb-8"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item, index) => (
              <Link
                key={`related-${index}`}
                href={item.href}
                className="rounded-card border border-need-border bg-need-cream p-5 transition hover:border-need-green-700"
              >
                <p className="font-semibold text-need-ink">{item.title}</p>
                <p className="mt-2 text-sm text-need-orange">{t("common.readMore")} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-need-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("common.otherServices")}
            className="mb-8"
          />
          <div className="flex flex-wrap gap-3">
            {otherServices.map((item) => (
              <Link
                key={item}
                href={`/services/${item}`}
                className="rounded-full border border-need-border bg-white px-4 py-2 text-sm font-semibold text-need-green-900 hover:border-need-green-700"
              >
                {t(`items.${item}.title`)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-need-green-900">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t("common.ctaTitle")}
            </h2>
            <p className="mt-3 text-white/80">{t("common.ctaSubtitle")}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="/book">{t("common.bookCta")}</CTAButton>
            <CTAButton href="/contact" variant="outlineLight">
              {t("common.contactCta")}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
