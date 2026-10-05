import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { PartnershipForm } from "@/components/forms/PartnershipForm";
import { cn } from "@/lib/cn";

export function PartnershipsIntro() {
  const t = useTranslations("Partnerships.intro");
  const pathways = t.raw("pathways") as Array<{
    title: string;
    body: string;
  }>;
  const tones = ["bg-need-green-100", "bg-need-blue-100", "bg-need-orange-100"];

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
        <div className="grid gap-5 lg:grid-cols-3">
          {pathways.map((item, index) => (
            <article
              key={`path-${index}`}
              className={cn("rounded-need p-6 shadow-card", tones[index])}
            >
              <h2 className="text-xl font-bold text-need-ink">{item.title}</h2>
              <p className="mt-3 text-sm text-need-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnershipsPartners() {
  const t = useTranslations("Partnerships.partners");
  const items = t.raw("items") as string[];

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
          {items.map((partner) => (
            <div
              key={partner}
              className="flex min-h-24 items-center justify-center rounded-card bg-white px-3 py-4 text-center text-sm font-semibold text-need-ink"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnershipsFormSection() {
  const t = useTranslations("Partnerships.formSection");

  return (
    <section id="partner-form" className="bg-need-cream scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
          <ul className="mt-8 space-y-3 text-sm text-need-ink">
            {(t.raw("bullets") as string[]).map((bullet, index) => (
              <li key={`bullet-${index}`} className="flex gap-2">
                <span className="text-need-green-700" aria-hidden>
                  ✓
                </span>
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CTAButton href="/consultancy" variant="secondary" size="sm">
              {t("consultancyLink")}
            </CTAButton>
          </div>
        </div>
        <div className="relative">
          <PartnershipForm />
        </div>
      </div>
    </section>
  );
}
