import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { ResourcesIndex } from "@/components/resources/ResourcesIndex";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Resources.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Resources");
  const tNav = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        breadcrumbLabel={tCommon("breadcrumb")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: tNav("resources") },
        ]}
      />
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-16 text-need-muted">
            {t("index.loading")}
          </div>
        }
      >
        <ResourcesIndex />
      </Suspense>
    </>
  );
}
