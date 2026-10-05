import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import {
  AboutOverview,
  AboutStats,
  AboutQuote,
  AboutCredentials,
  AboutDiet,
  AboutFellowship,
  AboutCorporate,
  AboutResearch,
  AboutPartners,
  AboutTeam,
  AboutContact,
  AboutCta,
} from "@/components/about/AboutSections";
import { TransformationsSection } from "@/components/home/TransformationsSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("About");
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
          { label: tNav("about") },
        ]}
      />
      <AboutOverview />
      <AboutStats />
      <AboutQuote />
      <AboutCredentials />
      <AboutDiet />
      <AboutFellowship />
      <AboutCorporate />
      <div id="research">
        <AboutResearch />
      </div>
      <AboutPartners />
      <TransformationsSection />
      <AboutTeam />
      <AboutContact />
      <AboutCta />
    </>
  );
}
