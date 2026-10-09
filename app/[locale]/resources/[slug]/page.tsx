import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleDetail } from "@/components/resources/ArticleDetail";
import { getArticleBySlug, getArticles } from "@/lib/sanity/client";
import {
  isResourceArticleSlug,
  resourceArticleSlugs,
} from "@/lib/resources";

export async function generateStaticParams() {
  const sanityArticles = await getArticles();
  const sanitySlugs = sanityArticles.map((a: any) => ({ slug: a.slug.current }));
  const localSlugs = resourceArticleSlugs.map((slug) => ({ slug }));
  return [...sanitySlugs, ...localSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  
  const article = await getArticleBySlug(slug);
  if (article) {
    return {
      title: article.title,
      description: article.excerpt,
    };
  }

  if (!isResourceArticleSlug(slug)) return {};

  const t = await getTranslations({ locale, namespace: "Resources" });

  return {
    title: t(`articles.${slug}.seoTitle`),
    description: t(`articles.${slug}.seoDescription`),
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const sanityArticle = await getArticleBySlug(slug);

  if (!sanityArticle && !isResourceArticleSlug(slug)) {
    notFound();
  }

  const t = await getTranslations("Resources");
  const tNav = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");

  const title = sanityArticle ? sanityArticle.title : t(`articles.${slug}.title`);
  const excerpt = sanityArticle ? sanityArticle.excerpt : t(`articles.${slug}.excerpt`);

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={title}
        subtitle={excerpt}
        breadcrumbLabel={tCommon("breadcrumb")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: tNav("resources"), href: "/resources" },
          { label: title },
        ]}
      />
      <ArticleDetail slug={slug} article={sanityArticle} />
    </>
  );
}
