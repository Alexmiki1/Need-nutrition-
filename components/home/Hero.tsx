import { useTranslations } from "next-intl";
import { CTAButton } from "@/components/ui/CTAButton";

export function Hero() {
  const t = useTranslations("Home.hero");

  return (
    <section className="hero-gradient relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 amharic-watermark" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div className="animate-fade-up">
          <span className="inline-flex rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 sm:text-sm">
            {t("tag")}
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/book">{t("ctaBook")}</CTAButton>
            <CTAButton href="/partnerships" variant="outlineLight">
              {t("ctaPartner")}
            </CTAButton>
            <CTAButton href="/media-inquiries" variant="outlineLight">
              {t("ctaMedia")}
            </CTAButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-in lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-need bg-need-green-800 shadow-soft">
            <img
              src="/images/hero image.jpg"
              alt={t("portraitAlt")}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-need-green-950/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="rounded-2xl bg-white/95 px-4 py-3 text-sm font-semibold text-need-ink">
                {t("portraitLabel")}
              </p>
            </div>
            <span className="sr-only">{t("portraitAlt")}</span>
          </div>

          <div className="absolute -left-2 top-8 animate-float rounded-full bg-white px-4 py-2 text-xs font-semibold text-need-green-900 shadow-card sm:-left-4 sm:text-sm">
            {t("badgeOne")}
          </div>
          <div
            className="absolute -right-2 bottom-24 animate-float rounded-full bg-white px-4 py-2 text-xs font-semibold text-need-green-900 shadow-card sm:-right-4 sm:text-sm"
            style={{ animationDelay: "1.2s" }}
          >
            {t("badgeTwo")}
          </div>
        </div>
      </div>
    </section>
  );
}
