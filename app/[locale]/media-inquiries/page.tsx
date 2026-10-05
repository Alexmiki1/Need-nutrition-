import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { MediaForm } from "@/components/forms/MediaForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MediaInquiries.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function MediaInquiriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("MediaInquiries");
  const tCommon = await getTranslations("Common");
  const topics = t.raw("topics.items") as Array<{ title: string; body: string }>;

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        breadcrumbLabel={tCommon("breadcrumb")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: t("hero.eyebrow") },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("topics.eyebrow")}
            title={t("topics.title")}
            subtitle={t("topics.subtitle")}
            align="center"
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((item, index) => (
              <article
                key={`topic-${index}`}
                className="rounded-need border border-need-border bg-need-cream p-6"
              >
                <h2 className="text-lg font-bold text-need-ink">{item.title}</h2>
                <p className="mt-3 text-sm text-need-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CTAButton href="/sewegna" variant="secondary">
              {t("topics.sewegnaCta")}
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="media-form" className="scroll-mt-24 bg-need-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow={t("aside.eyebrow")}
              title={t("aside.title")}
              subtitle={t("aside.subtitle")}
            />
            <ul className="mt-8 space-y-3 text-sm text-need-ink">
              {(t.raw("aside.bullets") as string[]).map((bullet, index) => (
                <li key={`b-${index}`} className="flex gap-2">
                  <span className="text-need-green-700" aria-hidden>
                    ✓
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <MediaForm />
        </div>
      </section>
    </>
  );
}
