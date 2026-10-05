import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { BlogCard } from "@/components/cards/Cards";
import {
  resourceArticleMeta,
  resourceArticleSlugs,
} from "@/lib/resources";

export function ResourcesPreview() {
  const t = useTranslations("Home.resources");
  const tRes = useTranslations("Resources");
  const previewSlugs = resourceArticleSlugs.slice(0, 3);

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
          {previewSlugs.map((slug) => {
            const meta = resourceArticleMeta[slug];
            return (
              <BlogCard
                key={slug}
                tint={meta.tint}
                title={tRes(`articles.${slug}.title`)}
                category={tRes(`categories.${meta.category}`)}
                meta={`${meta.date} · ${meta.author}`}
                readMore={t("readMore")}
                href={`/resources/${slug}`}
              />
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <CTAButton href="/resources" variant="secondary">
            {t("viewAll")}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
