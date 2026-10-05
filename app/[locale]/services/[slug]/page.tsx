import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceDetailContent } from "@/components/services/ServiceSections";
import { isServiceSlug, serviceSlugs } from "@/lib/services";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isServiceSlug(slug)) return {};

  const t = await getTranslations({ locale, namespace: "Services" });

  return {
    title: t(`items.${slug}.title`),
    description: t(`items.${slug}.summary`),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isServiceSlug(slug)) {
    notFound();
  }

  const t = await getTranslations("Services");
  const tNav = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");

  return (
    <>
      <PageHero
        eyebrow={t("common.eyebrow")}
        title={t(`items.${slug}.title`)}
        subtitle={t(`items.${slug}.summary`)}
        breadcrumbLabel={tCommon("breadcrumb")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: tNav("services"), href: "/services" },
          { label: t(`items.${slug}.title`) },
        ]}
      />
      <ServiceDetailContent slug={slug} />
    </>
  );
}
