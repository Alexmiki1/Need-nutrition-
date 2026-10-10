export const resourceCategories = [
  "healthy-eating",
  "weight-management",
  "diabetes",
  "hypertension",
  "cholesterol",
  "maternal-nutrition",
  "child-nutrition",
  "general-nutrition",
  "sewegna-recaps",
] as const;

export type ResourceCategory = (typeof resourceCategories)[number];

export const resourceArticleSlugs = [
  "ethiopian-plate-basics",
  "sustainable-weight-habits",
  "diabetes-friendly-ethiopian-meals",
  "sodium-aware-cooking-at-home",
  "fiber-fats-and-heart-health",
  "nutrition-in-pregnancy-basics",
  "feeding-toddlers-with-local-foods",
  "reading-nutrition-labels-simply",
  "sewegna-recap-green-vegetables",
] as const;

export type ResourceArticleSlug = (typeof resourceArticleSlugs)[number];

export function isResourceArticleSlug(
  value: string,
): value is ResourceArticleSlug {
  return (resourceArticleSlugs as readonly string[]).includes(value);
}

export function isResourceCategory(value: string): value is ResourceCategory {
  return (resourceCategories as readonly string[]).includes(value);
}

export type ArticleLanguage = "en" | "am" | "both";

/** Non-localized article metadata. Copy lives in messages. */
export const resourceArticleMeta: Record<
  ResourceArticleSlug,
  {
    category: ResourceCategory;
    language: ArticleLanguage;
    tint: "blue" | "green" | "orange";
    date: string;
    author: string;
    related: ResourceArticleSlug[];
    image?: string;
  }
> = {
  "ethiopian-plate-basics": {
    category: "healthy-eating",
    language: "both",
    tint: "green",
    date: "2024-06-12",
    author: "Abinet Tekle Hagos",
    image: "/images/photo_2026-10-07_09-50-09.jpg",
    related: [
      "reading-nutrition-labels-simply",
      "sewegna-recap-green-vegetables",
      "sustainable-weight-habits",
    ],
  },
  "sustainable-weight-habits": {
    category: "weight-management",
    language: "en",
    tint: "orange",
    date: "2024-07-03",
    author: "Abinet Tekle Hagos",
    image: "/images/photo_2026-10-07_09-50-13.jpg",
    related: [
      "ethiopian-plate-basics",
      "diabetes-friendly-ethiopian-meals",
      "fiber-fats-and-heart-health",
    ],
  },
  "diabetes-friendly-ethiopian-meals": {
    category: "diabetes",
    language: "both",
    tint: "blue",
    date: "2024-08-18",
    author: "NEED Nutritional",
    image: "/images/photo_2026-10-07_09-50-17.jpg",
    related: [
      "sustainable-weight-habits",
      "ethiopian-plate-basics",
      "reading-nutrition-labels-simply",
    ],
  },
  "sodium-aware-cooking-at-home": {
    category: "hypertension",
    language: "en",
    tint: "green",
    date: "2024-09-02",
    author: "NEED Nutritional",
    image: "/images/photo_2026-10-07_09-50-18.jpg",
    related: [
      "fiber-fats-and-heart-health",
      "ethiopian-plate-basics",
      "diabetes-friendly-ethiopian-meals",
    ],
  },
  "fiber-fats-and-heart-health": {
    category: "cholesterol",
    language: "en",
    tint: "blue",
    date: "2024-09-20",
    author: "Abinet Tekle Hagos",
    image: "/images/photo_2026-10-07_09-50-19.jpg",
    related: [
      "sodium-aware-cooking-at-home",
      "ethiopian-plate-basics",
      "sustainable-weight-habits",
    ],
  },
  "nutrition-in-pregnancy-basics": {
    category: "maternal-nutrition",
    language: "both",
    tint: "orange",
    date: "2024-10-05",
    author: "NEED Nutritional",
    image: "/images/photo_2026-10-07_09-50-20.jpg",
    related: [
      "feeding-toddlers-with-local-foods",
      "ethiopian-plate-basics",
      "reading-nutrition-labels-simply",
    ],
  },
  "feeding-toddlers-with-local-foods": {
    category: "child-nutrition",
    language: "am",
    tint: "green",
    date: "2024-10-22",
    author: "NEED Nutritional",
    image: "/images/Logo 1.jpg",
    related: [
      "nutrition-in-pregnancy-basics",
      "ethiopian-plate-basics",
      "sewegna-recap-green-vegetables",
    ],
  },
  "reading-nutrition-labels-simply": {
    category: "general-nutrition",
    language: "en",
    tint: "blue",
    date: "2024-11-08",
    author: "NEED Nutritional",
    image: "/images/Logo 2.jpg",
    related: [
      "ethiopian-plate-basics",
      "diabetes-friendly-ethiopian-meals",
      "fiber-fats-and-heart-health",
    ],
  },
  "sewegna-recap-green-vegetables": {
    category: "sewegna-recaps",
    language: "both",
    tint: "orange",
    date: "2024-11-20",
    author: "Sewegna / NEED",
    image: "/images/Logo 4.jpg",
    related: [
      "ethiopian-plate-basics",
      "sodium-aware-cooking-at-home",
      "feeding-toddlers-with-local-foods",
    ],
  },
};

export function filterArticles(options: {
  category?: string;
  language?: string;
}): ResourceArticleSlug[] {
  const { category, language } = options;

  return resourceArticleSlugs.filter((slug) => {
    const meta = resourceArticleMeta[slug];
    const categoryOk =
      !category || category === "all" || meta.category === category;
    const languageOk =
      !language ||
      language === "all" ||
      meta.language === "both" ||
      meta.language === language;
    return categoryOk && languageOk;
  });
}

export function matchesLanguageFilter(
  articleLanguage: ArticleLanguage,
  filter: "all" | "en" | "am",
): boolean {
  return (
    filter === "all" ||
    articleLanguage === "both" ||
    articleLanguage === filter
  );
}
