import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const contacts = [
  {
    key: "call" as const,
    href: site.phoneEt.href,
    className: "bg-need-green-700 hover:bg-need-green-800",
    external: false,
  },
  {
    key: "whatsapp" as const,
    href: site.whatsapp.href,
    className: "bg-[#25D366] hover:brightness-95",
    external: true,
  },
  {
    key: "email" as const,
    href: site.emailBusiness.href,
    className: "bg-need-orange hover:bg-need-orange-hover",
    external: false,
  },
  {
    key: "telegram" as const,
    href: site.telegram.href,
    className: "bg-[#2AABEE] hover:brightness-95",
    external: true,
  },
];

export function ContactButtons() {
  const t = useTranslations("Home.contact");

  return (
    <section className="bg-need-green-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            tone="dark"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contacts.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={cn(
                  "rounded-full px-5 py-4 text-center text-sm font-semibold text-white transition",
                  item.className,
                )}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {t(item.key)}
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/60">
            US:{" "}
            <a href={site.phoneUs.href} className="underline hover:text-white">
              {site.phoneUs.display}
            </a>
            {" · "}
            <a href={site.emailPersonal.href} className="underline hover:text-white">
              {site.emailPersonal.display}
            </a>
          </p>
        </div>

        <div className="rounded-need bg-gradient-to-br from-need-orange to-need-green-800 p-8 text-center shadow-soft">
          <div className="mx-auto flex aspect-square max-w-[220px] items-center justify-center rounded-card bg-white p-4">
            <div className="grid h-full w-full place-items-center rounded-lg border-2 border-dashed border-need-border bg-need-cream text-xs font-medium text-need-muted">
              {t("qrLabel")}
            </div>
          </div>
          <p className="mt-5 text-sm text-white/85">{t("qrNote")}</p>
        </div>
      </div>
    </section>
  );
}
