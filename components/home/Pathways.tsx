import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AudienceCard } from "@/components/cards/Cards";

export function PathwaysSection() {
  const t = useTranslations("Home.pathways");

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
          <AudienceCard
            tone="green"
            title={t("individuals.title")}
            body={t("individuals.body")}
            cta={t("individuals.cta")}
            href="/book"
          />
          <AudienceCard
            tone="blue"
            title={t("institutions.title")}
            body={t("institutions.body")}
            cta={t("institutions.cta")}
            href="/partnerships"
          />
          <AudienceCard
            tone="orange"
            title={t("media.title")}
            body={t("media.body")}
            cta={t("media.cta")}
            href="/media-inquiries"
          />
        </div>
      </div>
    </section>
  );
}

export function ChoosePathSection() {
  const t = useTranslations("Home.choosePath");
  const p = useTranslations("Home.pathways");

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
        <div className="grid gap-5 lg:grid-cols-3">
          <AudienceCard
            tone="green"
            title={p("individuals.title")}
            body={p("individuals.body")}
            cta={p("individuals.cta")}
            href="/book"
          />
          <AudienceCard
            tone="blue"
            title={p("institutions.title")}
            body={p("institutions.body")}
            cta={p("institutions.cta")}
            href="/partnerships"
          />
          <AudienceCard
            tone="orange"
            title={p("media.title")}
            body={p("media.body")}
            cta={p("media.cta")}
            href="/media-inquiries"
          />
        </div>
      </div>
    </section>
  );
}
