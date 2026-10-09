import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { BlogCard } from "@/components/cards/Cards";
import { urlFor } from "@/lib/sanity/client";
import {
  resourceArticleMeta,
  type ResourceArticleSlug,
} from "@/lib/resources";
import { cn } from "@/lib/cn";

type ArticleDetailProps = {
  slug: string;
  article?: any;
};

export function ArticleDetail({ slug, article: sanityArticle }: ArticleDetailProps) {
  const t = useTranslations("Resources");
  
  const isSanity = !!sanityArticle;
  
  const meta = isSanity ? null : resourceArticleMeta[slug as ResourceArticleSlug];
  
  const category = isSanity ? sanityArticle.category : meta?.category;
  const language = isSanity ? sanityArticle.language : meta?.language;
  const dateStr = isSanity ? sanityArticle.date : meta?.date;
  const author = isSanity ? sanityArticle.author : meta?.author;
  const tint = isSanity ? sanityArticle.tint : meta?.tint;
  
  const imageUrl = isSanity
    ? (sanityArticle.coverImage ? urlFor(sanityArticle.coverImage).width(900).auto('format').url() : null)
    : meta?.image;
  const excerpt = isSanity ? sanityArticle.excerpt : t(`articles.${slug}.excerpt`);
  
  const sections = isSanity 
    ? sanityArticle.content 
    : (t.raw(`articles.${slug}.sections`) as Array<{
        heading: string;
        body: string;
      }>);

  const related = isSanity 
    ? (sanityArticle.relatedArticles || [])
    : (meta?.related || []);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-need-green-100 px-3 py-1 font-semibold text-need-green-900">
              {isSanity ? category : t(`categories.${category}`)}
            </span>
            <span className="rounded-full bg-need-cream px-3 py-1 font-medium text-need-muted">
              {isSanity ? language : t(`languages.${language}`)}
            </span>
            <span className="text-need-muted">
              {dateStr} · {author}
            </span>
          </div>

          <div
            className={cn(
              "relative mb-10 aspect-[21/9] overflow-hidden rounded-need bg-gradient-to-br",
              tint === "blue" && "from-need-blue/30 to-need-blue-100",
              tint === "green" && "from-need-green-700/30 to-need-green-100",
              tint === "orange" && "from-need-orange/30 to-need-orange-100",
            )}
            role="img"
            aria-label={isSanity ? sanityArticle.title : t(`articles.${slug}.coverAlt`)}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={isSanity ? sanityArticle.title : t(`articles.${slug}.coverAlt`)}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          <p className="text-lg leading-relaxed text-need-muted">
            {excerpt}
          </p>

          <div className="mt-10 space-y-8">
            {sections && sections.map((section: any, index: number) => (
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
            {related.map((rel: any) => {
              const isRelSanity = isSanity;
              const relatedSlug = isRelSanity ? rel.slug?.current : rel;
              const relatedMeta = !isRelSanity ? resourceArticleMeta[relatedSlug as ResourceArticleSlug] : null;
              
              const relTint = isRelSanity ? rel.tint : relatedMeta?.tint;
              const relTitle = isRelSanity ? rel.title : t(`articles.${relatedSlug}.title`);
              const relCategory = isRelSanity ? rel.category : t(`categories.${relatedMeta?.category}`);
              const relDate = isRelSanity ? rel.date : relatedMeta?.date;
              const relAuthor = isRelSanity ? rel.author : relatedMeta?.author;

              return (
                <BlogCard
                  key={relatedSlug}
                  tint={relTint || "green"}
                  title={relTitle}
                  category={relCategory}
                  meta={`${relDate} · ${relAuthor}`}
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
