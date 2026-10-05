import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesIndexGrid } from "@/components/services/ServiceSections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Services.meta" });

  return {
    title: t("indexTitle"),
    description: t("indexDescription"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Services");
  const tNav = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");

  return (
    <>
      <PageHero
        eyebrow={t("index.eyebrow")}
        title={t("index.heroTitle")}
        subtitle={t("index.heroSubtitle")}
        breadcrumbLabel={tCommon("breadcrumb")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: tNav("services") },
        ]}
      />
      <ServicesIndexGrid />
    </>
  );
}
