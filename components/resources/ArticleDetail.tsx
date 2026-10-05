import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { BlogCard } from "@/components/cards/Cards";
import {
  resourceArticleMeta,
  type ResourceArticleSlug,
} from "@/lib/resources";
import { cn } from "@/lib/cn";

type ArticleDetailProps = {
  slug: ResourceArticleSlug;
};

export function ArticleDetail({ slug }: ArticleDetailProps) {
  const t = useTranslations("Resources");
  const meta = resourceArticleMeta[slug];
  const sections = t.raw(`articles.${slug}.sections`) as Array<{
    heading: string;
    body: string;
  }>;

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-need-green-100 px-3 py-1 font-semibold text-need-green-900">
              {t(`categories.${meta.category}`)}
            </span>
            <span className="rounded-full bg-need-cream px-3 py-1 font-medium text-need-muted">
              {t(`languages.${meta.language}`)}
            </span>
            <span className="text-need-muted">
              {meta.date} · {meta.author}
            </span>
          </div>

          <div
            className={cn(
              "mb-10 aspect-[21/9] rounded-need bg-gradient-to-br",
              meta.tint === "blue" && "from-need-blue/30 to-need-blue-100",
              meta.tint === "green" &&
                "from-need-green-700/30 to-need-green-100",
              meta.tint === "orange" && "from-need-orange/30 to-need-orange-100",
            )}
            role="img"
            aria-label={t(`articles.${slug}.coverAlt`)}
          />

          <p className="text-lg leading-relaxed text-need-muted">
            {t(`articles.${slug}.excerpt`)}
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section, index) => (
              <div key={`section-${index}`}>
                <h2 className="text-2xl font-bold text-need-ink">
                  {section.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-need-muted">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 rounded-card bg-need-cream px-5 py-4 text-sm text-need-muted">
            {t("common.disclaimer")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/book">{t("common.bookCta")}</CTAButton>
            <CTAButton href="/resources" variant="secondary">
              {t("common.backToIndex")}
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-need-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading title={t("common.relatedTitle")} className="mb-8" />
          <div className="grid gap-5 md:grid-cols-3">
            {meta.related.map((relatedSlug) => {
              const relatedMeta = resourceArticleMeta[relatedSlug];
              return (
                <BlogCard
                  key={relatedSlug}
                  tint={relatedMeta.tint}
                  title={t(`articles.${relatedSlug}.title`)}
                  category={t(`categories.${relatedMeta.category}`)}
                  meta={`${relatedMeta.date} · ${relatedMeta.author}`}
                  readMore={t("common.readMore")}
                  href={`/resources/${relatedSlug}`}
                />
              );
            })}
          </div>
          <p className="mt-8 text-center text-sm text-need-muted">
            <Link href="/sewegna" className="font-semibold text-need-orange">
              {t("common.sewegnaLink")} →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
