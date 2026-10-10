import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";

export function StorySection() {
  const t = useTranslations("Home.story");
  const points = t.raw("points") as string[];

  return (
    <section className="bg-need-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
          <ul className="mt-8 space-y-4">
            {points.map((point, index) => (
              <li key={`point-${index}`} className="flex gap-3 text-need-ink">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-need-green-100 text-need-green-800"
                  aria-hidden
                >
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-need bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-5 aspect-[4/3] overflow-hidden rounded-card bg-gradient-to-br from-need-green-100 via-white to-need-orange-100">
            <img
              src="/images/need foods logo.jpg"
              alt="NEED Foods logo"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-sm font-semibold tracking-wide text-need-orange uppercase">
            {t("productTitle")}
          </p>
          <p className="mt-2 text-need-muted">{t("productBody")}</p>
          <p className="mt-4 text-lg font-bold text-need-ink">{t("productPrice")}</p>
          <div className="mt-5">
            <CTAButton href="/contact" variant="secondary" size="sm">
              {t("productCta")}
            </CTAButton>
          </div>
        </aside>
      </div>
    </section>
  );
}
