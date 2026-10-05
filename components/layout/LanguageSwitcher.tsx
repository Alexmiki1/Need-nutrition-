"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("Language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: Locale) {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      role="group"
      aria-label={t("switchLabel")}
      className={cn(
        "inline-flex items-center rounded-full bg-need-orange px-1 py-1 text-sm font-semibold text-white shadow-soft",
        className,
      )}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchLocale(code)}
            className={cn(
              "rounded-full px-3 py-1.5 transition-colors",
              active ? "bg-white text-need-orange" : "text-white/90 hover:text-white",
            )}
            aria-pressed={active}
            aria-label={code === "en" ? "English" : "Amharic"}
          >
            {t(code)}
          </button>
        );
      })}
    </div>
  );
}
