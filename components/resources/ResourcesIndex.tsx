"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { BlogCard } from "@/components/cards/Cards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { urlFor } from "@/lib/sanity/client";
import {
  filterArticles,
  resourceArticleMeta,
  resourceCategories,
} from "@/lib/resources";
import { cn } from "@/lib/cn";

export function ResourcesIndex({ articles: sanityArticles }: { articles?: any[] } = {}) {
  const t = useTranslations("Resources");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "all";
  const language = searchParams.get("lang") ?? "all";

  const hasSanity = sanityArticles && sanityArticles.length > 0;

  const articles = useMemo(() => {
    if (hasSanity) {
      return sanityArticles.filter((item: any) => {
        const categoryOk = category === "all" || item.category === category;
        const languageOk = language === "all" || item.language === "both" || item.language === language;
        return categoryOk && languageOk;
      });
    }
    return filterArticles({ category, language });
  }, [category, language, sanityArticles, hasSanity]);

  function updateFilter(key: "category" | "lang", value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete(key === "lang" ? "lang" : "category");
    } else {
      params.set(key === "lang" ? "lang" : "category", value);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("index.eyebrow")}
          title={t("index.title")}
          subtitle={t("index.subtitle")}
          className="mb-8"
        />

        <div className="mb-8 space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-need-muted uppercase">
              {t("filters.category")}
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                active={category === "all"}
                onClick={() => updateFilter("category", "all")}
              >
                {t("filters.all")}
              </FilterChip>
              {resourceCategories.map((item) => (
                <FilterChip
                  key={item}
                  active={category === item}
                  onClick={() => updateFilter("category", item)}
                >
                  {t(`categories.${item}`)}
                </FilterChip>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-need-muted uppercase">
              {t("filters.language")}
            </p>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["all", t("filters.all")],
                  ["en", t("filters.en")],
                  ["am", t("filters.am")],
                ] as const
              ).map(([value, label]) => (
                <FilterChip
                  key={value}
                  active={language === value}
                  onClick={() => updateFilter("lang", value)}
                >
                  {label}
                </FilterChip>
              ))}
            </div>
          </div>
        </div>

        {articles.length === 0 ? (
          <p className="rounded-card bg-need-cream px-5 py-8 text-center text-need-muted">
            {t("index.empty")}
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((itemOrSlug: any) => {
              const isSanity = hasSanity;
              const slugString = isSanity ? itemOrSlug.slug.current : itemOrSlug;
              const meta = !isSanity ? resourceArticleMeta[slugString as keyof typeof resourceArticleMeta] : null;
              
              const tint = isSanity ? itemOrSlug.tint : meta?.tint;
              const title = isSanity ? itemOrSlug.title : t(`articles.${slugString}.title`);
              const category = isSanity ? itemOrSlug.category : t(`categories.${meta?.category}`);
              const dateStr = isSanity ? itemOrSlug.date : meta?.date;
              const author = isSanity ? itemOrSlug.author : meta?.author;
              const image = isSanity
                ? (itemOrSlug.coverImage ? urlFor(itemOrSlug.coverImage).width(600).auto('format').url() : undefined)
                : meta?.image;

              return (
                <BlogCard
                  key={slugString}
                  tint={tint || "green"}
                  title={title}
                  category={category}
                  meta={`${dateStr} · ${author}`}
                  readMore={t("common.readMore")}
                  href={`/resources/${slugString}`}
                  image={image}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3.5 py-1.5 text-sm font-semibold transition",
        active
          ? "bg-need-green-900 text-white"
          : "bg-need-cream text-need-ink hover:bg-need-green-100",
      )}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
