import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleDetail } from "@/components/resources/ArticleDetail";
import {
  isResourceArticleSlug,
  resourceArticleSlugs,
} from "@/lib/resources";

export function generateStaticParams() {
  return resourceArticleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
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

  if (!isResourceArticleSlug(slug)) {
    notFound();
  }

  const t = await getTranslations("Resources");
  const tNav = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t(`articles.${slug}.title`)}
        subtitle={t(`articles.${slug}.excerpt`)}
        breadcrumbLabel={tCommon("breadcrumb")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: tNav("resources"), href: "/resources" },
          { label: t(`articles.${slug}.title`) },
        ]}
      />
      <ArticleDetail slug={slug} />
    </>
  );
}
