import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { TeamCard, type TeamMember } from "@/components/cards/TeamCard";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function AboutOverview() {
  const t = useTranslations("About.overview");
  const achievements = t.raw("achievements") as string[];
  const colors = [
    "bg-need-orange",
    "bg-need-blue",
    "bg-rose-500",
    "bg-need-green-700",
    "bg-violet-600",
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-need-orange uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-need-ink sm:text-4xl">
              {t("title")}
            </h2>
            <blockquote className="mt-6 border-l-4 border-need-orange pl-4">
              <p className="text-lg italic text-need-ink">{t("quote")}</p>
              <cite className="mt-2 block text-sm font-semibold not-italic text-need-orange">
                {t("quoteAttr")}
              </cite>
            </blockquote>
            <p className="mt-6 text-need-muted">{t("body")}</p>
            <ul className="mt-8 space-y-3">
              {achievements.map((item, index) => (
                <li
                  key={`ach-${index}`}
                  className="flex gap-3 rounded-card bg-need-cream px-4 py-3 text-sm text-need-ink"
                >
                  <span
                    className={cn(
                      "mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full",
                      colors[index % colors.length],
                    )}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="rounded-need bg-need-green-900 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold tracking-wide text-need-orange uppercase">
                {t("orgLabel")}
              </p>
              <p className="mt-2 text-lg font-bold">{site.organizationName}</p>
              <dl className="mt-6 space-y-4 text-sm text-white/80">
                <div>
                  <dt className="font-semibold text-white">{t("founderLabel")}</dt>
                  <dd className="mt-1">
                    {site.founderName}
                    <span className="mt-1 block text-need-orange">
                      {site.founderNameAm}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">{t("locationLabel")}</dt>
                  <dd className="mt-1">{site.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">{t("audiencesLabel")}</dt>
                  <dd className="mt-1">{t("audiencesValue")}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-need border border-need-border bg-need-cream p-5 text-center">
              <p className="text-sm font-semibold text-need-green-800">
                {t("impactBadge")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutStats() {
  const t = useTranslations("About.stats");
  const items = t.raw("items") as Array<{ value: string; label: string }>;

  return (
    <section className="bg-gradient-to-r from-need-green-900 to-[#5c4a2e]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item, index) => (
          <div key={`about-stat-${index}`} className="text-center text-white">
            <p className="text-3xl font-bold text-need-orange sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-white/85">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutQuote() {
  const t = useTranslations("About.quote");

  return (
    <section className="bg-need-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-2xl font-semibold italic text-need-green-900 sm:text-3xl">
          &ldquo;{t("en")}&rdquo;
        </p>
        <p className="mt-4 text-base text-need-muted">{t("am")}</p>
        <p className="mt-6 text-sm font-semibold text-need-orange">{t("attr")}</p>
      </div>
    </section>
  );
}

export function AboutCredentials() {
  const t = useTranslations("About.credentials");
  const cards = t.raw("cards") as Array<{
    title: string;
    items: string[];
    linkLabel?: string;
    linkHref?: string;
  }>;
  const iconColors = ["bg-need-green-900", "bg-need-orange", "bg-need-green-800"];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={`cred-${index}`}
              className="rounded-need bg-need-cream p-6 shadow-card sm:p-8"
            >
              <div
                className={cn(
                  "mb-5 flex h-12 w-12 items-center justify-center rounded-full text-lg text-white",
                  iconColors[index % iconColors.length],
                )}
                aria-hidden
              >
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-need-ink">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-need-muted">
                {card.items.map((item, i) => (
                  <li key={`cred-item-${index}-${i}`}>{item}</li>
                ))}
              </ul>
              {card.linkLabel ? (
                <a
                  href={card.linkHref || "#"}
                  className="mt-5 inline-flex text-sm font-semibold text-need-orange hover:text-need-orange-hover"
                >
                  {card.linkLabel} →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutDiet() {
  const t = useTranslations("About.diet");
  const pillars = t.raw("pillars") as Array<{ title: string; body: string }>;
  const tones = [
    "bg-violet-500",
    "bg-need-green-700",
    "bg-need-blue",
    "bg-rose-500",
    "bg-need-orange",
    "bg-sky-500",
  ];

  return (
    <section className="bg-need-green-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
            {t("badge")}
          </p>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            {t("titleBefore")}{" "}
            <span className="text-amber-300">{t("titleAccent")}</span>
          </h2>
          <p className="mt-4 text-white/75">{t("subtitle")}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={`pillar-${index}`}
              className="rounded-card border border-white/10 bg-white/5 p-5"
            >
              <div
                className={cn(
                  "mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white",
                  tones[index % tones.length],
                )}
                aria-hidden
              >
                {index + 1}
              </div>
              <h3 className="font-bold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-white/70">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutFellowship() {
  const t = useTranslations("About.fellowship");
  const highlights = t.raw("highlights") as string[];
  const tags = t.raw("tags") as string[];

  return (
    <section className="bg-need-green-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-white/80">{t("subtitle")}</p>
        </div>
        <div className="relative mt-10 overflow-hidden rounded-need border border-amber-300/40 bg-need-green-950">
          <div className="aspect-[21/9] bg-gradient-to-br from-need-green-800 to-need-green-950">
            <img
              src="/images/hero image.jpg"
              alt={t("photoTitle")}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-lg font-bold">{t("photoTitle")}</p>
              <p className="text-sm text-white/75">{t("photoSubtitle")}</p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-amber-300 px-4 py-2 text-xs font-bold text-need-ink">
              {t("badge")}
            </span>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {highlights.map((item, index) => (
            <div
              key={`fellow-${index}`}
              className="rounded-card bg-white/10 px-5 py-4 text-sm text-white/90"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white/85"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCorporate() {
  const t = useTranslations("About.corporate");
  const services = t.raw("services") as Array<{
    title: string;
    items: string[];
  }>;
  const impact = t.raw("impact") as string[];
  const tags = t.raw("tags") as string[];
  const tones = ["bg-need-green-100", "bg-need-blue-100", "bg-need-orange-100"];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-10"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={`corp-${index}`}
              className={cn("rounded-need p-6 shadow-card", tones[index])}
            >
              <h3 className="text-lg font-bold text-need-ink">{service.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-need-muted">
                {service.items.map((item, i) => (
                  <li key={`corp-item-${index}-${i}`} className="flex gap-2">
                    <span className="text-need-green-700" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <article className="rounded-need bg-need-green-900 p-6 text-white sm:p-8">
            <p className="text-xs font-semibold tracking-wide text-need-orange uppercase">
              {t("campaignLabel")}
            </p>
            <h3 className="mt-3 text-2xl font-bold">{t("campaignTitle")}</h3>
            <p className="mt-4 text-white/80">{t("campaignBody")}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-need bg-need-cream p-6 sm:p-8">
            <h3 className="text-lg font-bold text-need-ink">{t("impactTitle")}</h3>
            <ol className="mt-4 space-y-3">
              {impact.map((item, index) => (
                <li key={`impact-${index}`} className="flex gap-3 text-sm text-need-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-need-green-900 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <CTAButton href="/partnerships" size="sm">
                {t("impactCta")}
              </CTAButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function AboutResearch() {
  const t = useTranslations("About.research");
  const papers = t.raw("papers") as Array<{
    type: string;
    year: string;
    title: string;
    authors: string;
    venue: string;
    body: string;
    cta: string;
    href: string;
    tone: "blue" | "green" | "orange";
  }>;
  const toneClass = {
    blue: "bg-need-blue-100",
    green: "bg-need-green-100",
    orange: "bg-need-orange-100",
  };

  return (
    <section className="bg-need-cream">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-10"
        />
        <div className="space-y-5">
          {papers.map((paper, index) => (
            <article
              key={`paper-${index}`}
              className={cn("rounded-need p-6 sm:p-8", toneClass[paper.tone])}
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-need-ink">
                  {paper.type}
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-need-muted">
                  {paper.year}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-need-ink">{paper.title}</h3>
              <p className="mt-2 text-sm font-medium text-need-ink">{paper.authors}</p>
              <p className="text-sm italic text-need-muted">{paper.venue}</p>
              <p className="mt-3 text-sm text-need-muted">{paper.body}</p>
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-need-green-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-need-green-800"
              >
                {paper.cta} ↗
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-full border border-need-border bg-white px-5 py-3 text-center text-sm text-need-muted">
          {t("note")}
        </p>
      </div>
    </section>
  );
}

export function AboutPartners() {
  const t = useTranslations("About.partners");
  const partners = t.raw("items") as string[];

  return (
    <section className="bg-need-green-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          tone="dark"
          className="mb-10"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex min-h-24 items-center justify-center rounded-card bg-white px-3 py-4 text-center text-sm font-semibold text-need-ink"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutTeam() {
  const t = useTranslations("About.team");
  const members = t.raw("members") as TeamMember[];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mb-10"
        />
        <div className="mx-auto grid max-w-3xl gap-6">
          {members.map((member, index) => (
            <TeamCard
              key={`team-${index}`}
              member={member}
              specialtiesLabel={t("specialtiesLabel")}
              languagesLabel={t("languagesLabel")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutContact() {
  const t = useTranslations("About.contact");

  const cards = [
    {
      label: t("whatsapp"),
      value: site.whatsapp.display,
      href: site.whatsapp.href,
      className: "bg-[#25D366]",
    },
    {
      label: t("whatsappUs"),
      value: site.whatsappUs.display,
      href: site.whatsappUs.href,
      className: "bg-need-green-800",
    },
    {
      label: t("telegram"),
      value: site.telegram.display,
      href: site.telegram.href,
      className: "bg-[#2AABEE]",
    },
    {
      label: t("phone"),
      value: `${site.phoneEt.display} · ${site.phoneUs.display}`,
      href: site.phoneEt.href,
      className: "bg-need-ink",
    },
  ];

  return (
    <section className="bg-need-green-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-need-orange uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold">{t("title")}</h2>
          <p className="mt-4 text-white/75">{t("subtitle")}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "rounded-need p-5 text-center transition hover:brightness-110",
                card.className,
              )}
            >
              <p className="font-bold">{card.label}</p>
              <p className="mt-2 text-sm text-white/90">{card.value}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
          <a href={site.emailPersonal.href} className="hover:text-white">
            {site.emailPersonal.display}
          </a>
          <a href={site.emailBusiness.href} className="hover:text-white">
            {site.emailBusiness.display}
          </a>
          <a
            href={site.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            {site.websiteDisplay}
          </a>
          <span>{site.address}</span>
        </div>
      </div>
    </section>
  );
}

export function AboutCta() {
  const t = useTranslations("About.cta");

  return (
    <section className="bg-need-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-need-ink sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-need-muted">{t("subtitle")}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CTAButton href="/book">{t("book")}</CTAButton>
          <CTAButton href="/partnerships" variant="secondary">
            {t("partner")}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
