import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import {
  SewegnaChannels,
  SewegnaArchive,
  SewegnaMediaCta,
} from "@/components/sewegna/SewegnaSections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Sewegna.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function SewegnaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Sewegna");
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
          { label: tNav("sewegna") },
        ]}
      />
      <SewegnaChannels />
      <SewegnaArchive />
      <SewegnaMediaCta />
    </>
  );
}
