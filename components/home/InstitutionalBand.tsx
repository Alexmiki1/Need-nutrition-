import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";

export function InstitutionalBand() {
  const t = useTranslations("Home.institutional");
  const features = t.raw("features") as Array<{ title: string; body: string }>;
  const featureColors = [
    "bg-amber-200 text-need-ink",
    "bg-need-green-100 text-need-green-900",
    "bg-need-blue-100 text-need-blue",
    "bg-violet-100 text-violet-900",
  ];

  return (
    <section className="bg-need-green-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-need shadow-soft">
            <img
              src="/images/Programs and partnerships for organizations.png"
              alt={t("imageAlt")}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("subtitle")}
              tone="dark"
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature, i) => (
                <div
                  key={`feature-${i}`}
                  className={`rounded-card p-4 ${featureColors[i % featureColors.length]}`}
                >
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="mt-1 text-sm opacity-80">{feature.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton href="/consultancy">{t("cta")}</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
