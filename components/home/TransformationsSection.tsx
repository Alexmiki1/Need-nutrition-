import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import {
  TransformationCard,
  type Transformation,
} from "@/components/cards/TransformationCard";

type TransformationsSectionProps = {
  showCta?: boolean;
  variant?: "home" | "page";
};

export function TransformationsSection({
  showCta = true,
  variant = "page",
}: TransformationsSectionProps) {
  const t = useTranslations("Transformations");
  const items = t.raw("items") as Transformation[];

  return (
    <section className={variant === "home" ? "bg-white" : "bg-need-cream"}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {variant === "home" ? (
          <div className="mb-10 rounded-need bg-need-green-900 px-6 py-10 text-white sm:px-10">
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("subtitle")}
              tone="dark"
            />
          </div>
        ) : (
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mb-10"
          />
        )}

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <TransformationCard key={`transform-${index}`} item={item} />
          ))}
        </div>

        {showCta ? (
          <div className="mt-10 flex justify-center">
            <CTAButton href="/book">{t("cta")}</CTAButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}
