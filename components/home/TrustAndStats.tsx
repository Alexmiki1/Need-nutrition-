import { useTranslations } from "next-intl";

export function TrustBar() {
  const t = useTranslations("Home.trust");

  const items = [
    t("items.individuals"),
    t("items.institutions"),
    t("items.media"),
  ];

  return (
    <section className="border-b border-need-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-xs font-semibold tracking-wide text-need-muted uppercase">
          {t("title")}
        </p>
        <ul className="grid gap-3 sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-full bg-need-cream px-4 py-3 text-center text-sm font-semibold text-need-green-900"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function StatsRow() {
  const t = useTranslations("Home.stats");
  const items = t.raw("items") as Array<{ value: string; label: string }>;

  return (
    <section className="bg-need-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-need-ink sm:text-3xl">{t("title")}</h2>
          <p className="mt-2 text-sm text-need-muted">{t("note")}</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={`stat-${index}`}
              className="rounded-card bg-white p-5 text-center shadow-card"
            >
              <dt className="text-2xl font-bold text-need-orange sm:text-3xl">
                {item.value}
              </dt>
              <dd className="mt-2 text-sm text-need-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
