"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { sitePlaceholders } from "@/lib/site";

export function StickyContactBar() {
  const t = useTranslations("StickyBar");

  return (
    <nav
      aria-label={t("label")}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-need-border bg-white/95 backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-3 divide-x divide-need-border">
        <a
          href={sitePlaceholders.phoneHref}
          className="flex flex-col items-center gap-1 px-2 py-3 text-xs font-semibold text-need-green-900"
        >
          <PhoneIcon />
          {t("call")}
        </a>
        <a
          href={sitePlaceholders.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-2 py-3 text-xs font-semibold text-need-green-900"
        >
          <WhatsAppIcon />
          {t("whatsapp")}
        </a>
        <Link
          href="/book"
          className="flex flex-col items-center gap-1 bg-need-orange px-2 py-3 text-xs font-semibold text-white"
        >
          <CalendarIcon />
          {t("book")}
        </Link>
      </div>
    </nav>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.7c0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.7 2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.2A8.8 8.8 0 0 0 4.4 16.3L3.2 20.8l4.6-1.2A8.8 8.8 0 1 0 12 3.2Zm4.9 12.5c-.2.6-1.2 1.1-1.9 1.2-.5.1-1.1.1-1.8-.1-1.1-.3-2.5-.9-4.1-2.2-2-1.7-3.3-3.8-3.6-4.4-.3-.6-.9-1.9-.1-2.8.2-.3.5-.4.8-.4h.9c.3 0 .6 0 .8.7.2.8.8 2 .9 2.1.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l.7-.8c.2-.2.4-.2.6-.1.2.1 1.6.8 1.9.9.3.1.5.2.6.3.1.2.1.8-.1 1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3v2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V3h-2v2H9V3H7Zm12 8H5v8h14v-8Z"
        fill="currentColor"
      />
    </svg>
  );
}
