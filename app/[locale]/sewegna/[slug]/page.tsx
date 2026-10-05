import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { EpisodeDetail } from "@/components/sewegna/SewegnaSections";
import { isSewegnaEpisodeSlug, sewegnaEpisodeSlugs } from "@/lib/sewegna";

export function generateStaticParams() {
  return sewegnaEpisodeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isSewegnaEpisodeSlug(slug)) return {};

  const t = await getTranslations({ locale, namespace: "Sewegna" });

  return {
    title: t(`episodes.${slug}.title`),
    description: t(`episodes.${slug}.description`),
  };
}

export default async function SewegnaEpisodePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isSewegnaEpisodeSlug(slug)) {
    notFound();
  }

  const t = await getTranslations("Sewegna");
  const tNav = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t(`episodes.${slug}.title`)}
        subtitle={t(`episodes.${slug}.summary`)}
        breadcrumbLabel={tCommon("breadcrumb")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: tNav("sewegna"), href: "/sewegna" },
          { label: t(`episodes.${slug}.title`) },
        ]}
      />
      <EpisodeDetail slug={slug} />
    </>
  );
}
