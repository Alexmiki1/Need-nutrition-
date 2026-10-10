"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { BlogCard } from "@/components/cards/Cards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  matchesLanguageFilter,
  resourceArticleMeta,
  resourceArticleSlugs,
  resourceCategories,
  type ResourceCategory,
} from "@/lib/resources";
import { cn } from "@/lib/cn";

type LangFilter = "all" | "en" | "am";

export function ResourcesCatalog() {
  const t = useTranslations("Resources");
  const [category, setCategory] = useState<"all" | ResourceCategory>("all");
  const [language, setLanguage] = useState<LangFilter>("all");

  const filtered = useMemo(() => {
    return resourceArticleSlugs.filter((slug) => {
      const meta = resourceArticleMeta[slug];
      const categoryOk = category === "all" || meta.category === category;
      const languageOk = matchesLanguageFilter(meta.language, language);
      return categoryOk && languageOk;
    });
  }, [category, language]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("catalog.eyebrow")}
          title={t("catalog.title")}
          subtitle={t("catalog.subtitle")}
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
                onClick={() => setCategory("all")}
                label={t("filters.allCategories")}
              />
              {resourceCategories.map((item) => (
                <FilterChip
                  key={item}
                  active={category === item}
                  onClick={() => setCategory(item)}
                  label={t(`categories.${item}`)}
                />
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
                  ["all", t("filters.allLanguages")],
                  ["en", t("filters.english")],
                  ["am", t("filters.amharic")],
                ] as const
              ).map(([value, label]) => (
                <FilterChip
                  key={value}
                  active={language === value}
                  onClick={() => setLanguage(value)}
                  label={label}
                />
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-card bg-need-cream px-5 py-8 text-center text-need-muted">
            {t("catalog.empty")}
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((slug) => {
              const meta = resourceArticleMeta[slug];
              return (
                <BlogCard
                  key={slug}
                  tint={meta.tint}
                  title={t(`articles.${slug}.title`)}
                  category={t(`categories.${meta.category}`)}
                  meta={`${meta.date} · ${meta.author}`}
                  readMore={t("catalog.readMore")}
                  href={`/resources/${slug}`}
                  image={meta.image}
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
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-semibold transition",
        active
          ? "bg-need-green-900 text-white"
          : "bg-need-cream text-need-ink hover:bg-need-green-100",
      )}
    >
      {label}
    </button>
  );
}
