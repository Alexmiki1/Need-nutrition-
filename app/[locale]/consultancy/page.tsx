import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import {
  ConsultancyOfferings,
  ConsultancyPrograms,
  ConsultancyCaseStudies,
  ConsultancyAudiences,
  ConsultancyCta,
} from "@/components/consultancy/ConsultancySections";
import { AboutCorporate } from "@/components/about/AboutSections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Consultancy.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ConsultancyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Consultancy");
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
          { label: tNav("consultancy") },
        ]}
      />
      <ConsultancyOfferings />
      <AboutCorporate />
      <ConsultancyPrograms />
      <ConsultancyCaseStudies />
      <ConsultancyAudiences />
      <ConsultancyCta />
    </>
  );
}
