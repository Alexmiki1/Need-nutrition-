import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Consultation.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Consultation");
  const tNav = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");

  return (
    <>
      <PageHero
        eyebrow={t("form.title")}
        title={t("form.title")}
        subtitle={t("form.subtitle")}
        breadcrumbLabel={tCommon("breadcrumb")}
        breadcrumbs={[
          { label: tCommon("home"), href: "/" },
          { label: tNav("book") },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <ConsultationForm />
      </div>
    </>
  );
}
