import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { EpisodeCard } from "@/components/cards/Cards";
import { YouTubeLiteEmbed } from "@/components/media/YouTubeLiteEmbed";
import {
  sewegnaEpisodeMeta,
  sewegnaEpisodeSlugs,
  type SewegnaEpisodeSlug,
} from "@/lib/sewegna";

export function SewegnaChannels() {
  const t = useTranslations("Sewegna.channels");
  const items = t.raw("items") as Array<{ title: string; body: string }>;
  const tones = ["bg-need-green-100", "bg-need-blue-100", "bg-need-orange-100", "bg-violet-100"];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <article
              key={`channel-${index}`}
              className={`rounded-need p-5 shadow-card ${tones[index % tones.length]}`}
            >
              <h2 className="text-lg font-bold text-need-ink">{item.title}</h2>
              <p className="mt-2 text-sm text-need-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SewegnaArchive() {
  const t = useTranslations("Sewegna");

  return (
    <section className="bg-need-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("archive.eyebrow")}
          title={t("archive.title")}
          subtitle={t("archive.subtitle")}
          align="center"
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sewegnaEpisodeSlugs.map((slug) => (
            <EpisodeCard
              key={slug}
              title={t(`episodes.${slug}.title`)}
              category={sewegnaEpisodeMeta[slug].category}
              playLabel={t("common.play")}
              youtubeId={sewegnaEpisodeMeta[slug].youtubeId}
              href={`/sewegna/${slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SewegnaMediaCta() {
  const t = useTranslations("Sewegna.cta");

  return (
    <section className="bg-need-green-900">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t("title")}</h2>
          <p className="mt-3 text-white/80">{t("subtitle")}</p>
        </div>
        <CTAButton href="/media-inquiries">{t("button")}</CTAButton>
      </div>
    </section>
  );
}

type EpisodeDetailProps = {
  slug: SewegnaEpisodeSlug;
};

export function EpisodeDetail({ slug }: EpisodeDetailProps) {
  const t = useTranslations("Sewegna");
  const meta = sewegnaEpisodeMeta[slug];
  const topics = t.raw(`episodes.${slug}.topics`) as string[];
  const related = t.raw(`episodes.${slug}.related`) as Array<{
    title: string;
    href: string;
  }>;
  const other = sewegnaEpisodeSlugs.filter((item) => item !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-need-orange-100 px-3 py-1 font-semibold text-need-orange">
              {meta.category}
            </span>
            <span className="text-need-muted">{t(`episodes.${slug}.meta`)}</span>
          </div>

          <YouTubeLiteEmbed
            videoId={meta.youtubeId}
            title={t(`episodes.${slug}.title`)}
            playLabel={t("common.play")}
            placeholderLabel={t("common.videoPlaceholder")}
          />

          {meta.audioUrl ? (
            <div className="mt-6 rounded-card border border-need-border bg-need-cream p-4">
              <p className="mb-2 text-sm font-semibold text-need-ink">
                {t("common.audioLabel")}
              </p>
              <audio controls className="w-full" preload="none">
                <source src={meta.audioUrl} />
                {t("common.audioFallback")}
              </audio>
            </div>
          ) : (
            <p className="mt-4 text-sm text-need-muted">{t("common.audioPlaceholder")}</p>
          )}

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold text-need-ink">
                {t("common.descriptionLabel")}
              </h2>
              <p className="mt-4 leading-relaxed text-need-muted">
                {t(`episodes.${slug}.description`)}
              </p>

              <h2 className="mt-10 text-2xl font-bold text-need-ink">
                {t("common.recapLabel")}
              </h2>
              <p className="mt-4 leading-relaxed text-need-muted">
                {t(`episodes.${slug}.recap`)}
              </p>
            </div>

            <aside className="space-y-6">
              <div className="rounded-need bg-need-green-100 p-6">
                <h2 className="text-lg font-bold text-need-green-900">
                  {t("common.topicsLabel")}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-need-ink"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-need border border-need-border bg-need-cream p-6">
                <h2 className="text-lg font-bold text-need-ink">
                  {t("common.relatedLabel")}
                </h2>
                <ul className="mt-4 space-y-3">
                  {related.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm font-semibold text-need-orange hover:text-need-orange-hover"
                      >
                        {item.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-need-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading title={t("common.moreEpisodes")} className="mb-8" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {other.map((item) => (
              <EpisodeCard
                key={item}
                title={t(`episodes.${item}.title`)}
                category={sewegnaEpisodeMeta[item].category}
                playLabel={t("common.play")}
                youtubeId={sewegnaEpisodeMeta[item].youtubeId}
                href={`/sewegna/${item}`}
              />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton href="/sewegna" variant="secondary">
              {t("common.backToArchive")}
            </CTAButton>
            <CTAButton href="/media-inquiries">{t("cta.button")}</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
