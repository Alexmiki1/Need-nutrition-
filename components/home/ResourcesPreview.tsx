import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { BlogCard } from "@/components/cards/Cards";
import { urlFor } from "@/lib/sanity/client";
import {
  resourceArticleMeta,
  resourceArticleSlugs,
} from "@/lib/resources";

export function ResourcesPreview({ articles }: { articles?: any[] } = {}) {
  const t = useTranslations("Home.resources");
  const tRes = useTranslations("Resources");
  
  const hasSanity = articles && articles.length > 0;
  const previewItems = hasSanity 
    ? articles.slice(0, 3) 
    : resourceArticleSlugs.slice(0, 3).map(slug => ({
        slug: { current: slug },
        meta: resourceArticleMeta[slug]
      }));

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
          {previewItems.map((item) => {
            const isSanity = hasSanity;
            const slugString = isSanity ? item.slug.current : item.slug.current;
            const tint = isSanity ? item.tint : item.meta.tint;
            const title = isSanity ? item.title : tRes(`articles.${slugString}.title`);
            const category = isSanity ? item.category : tRes(`categories.${item.meta.category}`);
            const dateStr = isSanity ? item.date : item.meta.date;
            const author = isSanity ? item.author : item.meta.author;
            
            const image = isSanity
              ? (item.coverImage ? urlFor(item.coverImage).width(600).auto('format').url() : undefined)
              : item.meta?.image;
            
            return (
              <BlogCard
                key={slugString}
                tint={tint || "green"}
                title={title}
                category={category}
                meta={`${dateStr} · ${author}`}
                readMore={t("readMore")}
                href={`/resources/${slugString}`}
                image={image}
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
