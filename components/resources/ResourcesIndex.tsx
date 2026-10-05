"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { BlogCard } from "@/components/cards/Cards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  filterArticles,
  resourceArticleMeta,
  resourceCategories,
} from "@/lib/resources";
import { cn } from "@/lib/cn";

export function ResourcesIndex() {
  const t = useTranslations("Resources");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "all";
  const language = searchParams.get("lang") ?? "all";

  const articles = useMemo(
    () => filterArticles({ category, language }),
    [category, language],
  );

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
            {articles.map((slug) => {
              const meta = resourceArticleMeta[slug];
              return (
                <BlogCard
                  key={slug}
                  tint={meta.tint}
                  title={t(`articles.${slug}.title`)}
                  category={t(`categories.${meta.category}`)}
                  meta={`${meta.date} · ${meta.author}`}
                  readMore={t("common.readMore")}
                  href={`/resources/${slug}`}
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
