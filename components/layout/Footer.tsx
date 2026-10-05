import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

const companyLinks = [
  { href: "/about", key: "about" as const },
  { href: "/consultancy", key: "consultancy" as const },
  { href: "/testimonials", key: "testimonials" as const },
  { href: "/contact", key: "contact" as const },
];

const serviceLinks = [
  { href: "/services", key: "services" as const },
  { href: "/sewegna", key: "sewegna" as const },
  { href: "/resources", key: "resources" as const },
  { href: "/book", key: "book" as const },
];

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-need-green-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-need-orange text-sm font-bold">
              N
            </span>
            <span className="text-lg font-bold">NEED Nutritional</span>
          </div>
          <p className="text-sm leading-relaxed text-white/75">{t("tagline")}</p>
          <p className="mt-4 text-xs text-white/50">{t("placeholderNote")}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase text-need-orange">
            {t("company")}
          </h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase text-need-orange">
            {t("services")}
          </h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase text-need-orange">
            {t("connect")}
          </h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <a href={site.phoneEt.href} className="hover:text-white">
                {site.phoneEt.display}
              </a>
            </li>
            <li>
              <a href={site.phoneUs.href} className="hover:text-white">
                {site.phoneUs.display} (US)
              </a>
            </li>
            <li>
              <a href={site.emailBusiness.href} className="hover:text-white">
                {site.emailBusiness.display}
              </a>
            </li>
            <li>
              <a
                href={site.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {site.websiteDisplay}
              </a>
            </li>
            <li>{site.address}</li>
            <li className="pt-2">
              <Link href="/privacy" className="hover:text-white">
                {t("privacy")}
              </Link>
              {" · "}
              <Link href="/terms" className="hover:text-white">
                {t("terms")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55 sm:px-6 lg:px-8">
        {t("rights", { year })}
      </div>
    </footer>
  );
}
