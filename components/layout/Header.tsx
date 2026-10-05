"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/consultancy", key: "consultancy" },
  { href: "/sewegna", key: "sewegna" },
  { href: "/resources", key: "resources" },
  { href: "/testimonials", key: "testimonials" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-need-green-900 text-white shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-need-orange text-sm font-bold">
            N
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide sm:text-base">
              NEED
            </span>
            <span className="hidden text-[11px] text-white/70 sm:block">
              Nutritional
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={t("mainNav")}
        >
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-white/15 text-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white",
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <CTAButton href="/book" size="sm" className="whitespace-nowrap">
            {t("book")}
          </CTAButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-transform",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-transform",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-need-green-950 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          <CTAButton href="/book" className="mb-2 w-full">
            {t("book")}
          </CTAButton>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
