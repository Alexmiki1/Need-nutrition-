import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";

export function ConsultancyOfferings() {
  const t = useTranslations("Consultancy.offerings");
  const items = t.raw("items") as Array<{
    title: string;
    body: string;
  }>;
  const tones = [
    "bg-need-green-100",
    "bg-need-blue-100",
    "bg-need-orange-100",
    "bg-violet-100",
    "bg-need-cream",
    "bg-amber-100",
  ];

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
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={`offer-${index}`}
              className={cn(
                "rounded-need p-6 shadow-card sm:p-8",
                tones[index % tones.length],
              )}
            >
              <h2 className="text-xl font-bold text-need-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-need-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConsultancyPrograms() {
  const t = useTranslations("Consultancy.programs");
  const steps = t.raw("steps") as string[];

  return (
    <section className="bg-need-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={`step-${index}`}
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
      </div>
    </section>
  );
}

export function ConsultancyCaseStudies() {
  const t = useTranslations("Consultancy.cases");
  const items = t.raw("items") as Array<{
    title: string;
    body: string;
    tags: string[];
  }>;

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
        <div className="grid gap-5 lg:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={`case-${index}`}
              className="rounded-need border border-need-border bg-need-cream p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-need-green-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-need-muted">
                {item.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-need-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConsultancyAudiences() {
  const t = useTranslations("Consultancy.audiences");
  const items = t.raw("items") as Array<{
    title: string;
    body: string;
  }>;
  const tones = ["border-need-green-700", "border-need-blue", "border-need-orange"];

  return (
    <section className="bg-need-green-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          tone="dark"
          className="mb-10"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={`aud-${index}`}
              className={cn(
                "rounded-need border-l-4 bg-white/10 p-6",
                tones[index % tones.length],
              )}
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/80">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CTAButton href="/partnerships">{t("cta")}</CTAButton>
        </div>
      </div>
    </section>
  );
}

export function ConsultancyCta() {
  const t = useTranslations("Consultancy.cta");

  return (
    <section className="bg-need-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-need-ink sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-need-muted">{t("subtitle")}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CTAButton href="/partnerships">{t("partner")}</CTAButton>
          <CTAButton href="/contact" variant="secondary">
            {t("contact")}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
