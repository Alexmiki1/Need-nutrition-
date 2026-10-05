import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { TransformationsSection } from "@/components/home/TransformationsSection";
import {
  TestimonialsConsentNote,
  TestimonialsQuotes,
  TestimonialsRecognition,
  TestimonialsCta,
} from "@/components/testimonials/TestimonialsSections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Testimonials.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function TestimonialsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Testimonials");
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
          { label: tNav("testimonials") },
        ]}
      />
      <TestimonialsConsentNote />
      <TestimonialsQuotes />
      <TransformationsSection showCta={false} variant="page" />
      <TestimonialsRecognition />
      <TestimonialsCta />
    </>
  );
}
