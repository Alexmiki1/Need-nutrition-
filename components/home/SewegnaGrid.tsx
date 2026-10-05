import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { EpisodeCard } from "@/components/cards/Cards";
import {
  sewegnaEpisodeMeta,
  sewegnaEpisodeSlugs,
} from "@/lib/sewegna";

export function SewegnaGrid() {
  const t = useTranslations("Home.sewegna");
  const tEpisodes = useTranslations("Sewegna.episodes");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sewegnaEpisodeSlugs.map((slug) => (
            <EpisodeCard
              key={slug}
              title={tEpisodes(`${slug}.title`)}
              category={sewegnaEpisodeMeta[slug].category}
              playLabel={t("play")}
              youtubeId={sewegnaEpisodeMeta[slug].youtubeId}
              href={`/sewegna/${slug}`}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CTAButton href="/sewegna" variant="secondary">
            {t("watchAll")}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
