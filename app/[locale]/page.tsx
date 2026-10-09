import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { TrustBar, StatsRow } from "@/components/home/TrustAndStats";
import { SewegnaGrid } from "@/components/home/SewegnaGrid";
import { StorySection } from "@/components/home/StorySection";
import { PathwaysSection, ChoosePathSection } from "@/components/home/Pathways";
import { InstitutionalBand } from "@/components/home/InstitutionalBand";
import {
  ResourcesPreview,
  FeaturedBanner,
  PartnersCloud,
  TestimonialsPreview,
  ServicesPreview,
} from "@/components/home/ContentSections";
import { ContactButtons } from "@/components/home/ContactButtons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

import { getTestimonialQuotes, getTransformationCases, getArticles } from "@/lib/sanity/client";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const sanityQuotes = await getTestimonialQuotes();
  const sanityTransformations = await getTransformationCases();
  const sanityArticles = await getArticles();

  return (
    <>
      <Hero />
      <TrustBar />
      <StatsRow />
      <SewegnaGrid />
      <StorySection />
      <PathwaysSection />
      <InstitutionalBand />
      <ResourcesPreview articles={sanityArticles} />
      <FeaturedBanner />
      <PartnersCloud />
      <TestimonialsPreview quotes={sanityQuotes} transformations={sanityTransformations} />
      <ServicesPreview />
      <ContactButtons />
      <ChoosePathSection />
    </>
  );
}
