import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import {
  PartnershipsIntro,
  PartnershipsPartners,
  PartnershipsFormSection,
} from "@/components/partnerships/PartnershipsSections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Partnerships.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PartnershipsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Partnerships");
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
          { label: t("hero.eyebrow") },
        ]}
      />
      <PartnershipsIntro />
      <PartnershipsPartners />
      <PartnershipsFormSection />
    </>
  );
}
