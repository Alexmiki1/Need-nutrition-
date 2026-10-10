import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { CTAButton } from "@/components/ui/CTAButton";

type AudienceCardProps = {
  title: string;
  body: string;
  cta: string;
  href: string;
  tone: "blue" | "green" | "orange";
  className?: string;
};

const tones = {
  blue: {
    bg: "bg-need-blue-100",
    accent: "text-need-blue",
    iconBg: "bg-need-blue text-white",
  },
  green: {
    bg: "bg-need-green-100",
    accent: "text-need-green-800",
    iconBg: "bg-need-green-800 text-white",
  },
  orange: {
    bg: "bg-need-orange-100",
    accent: "text-need-orange",
    iconBg: "bg-need-orange text-white",
  },
};

export function AudienceCard({
  title,
  body,
  cta,
  href,
  tone,
  className,
}: AudienceCardProps) {
  const t = tones[tone];

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-need p-6 shadow-card sm:p-8",
        t.bg,
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold",
          t.iconBg,
        )}
        aria-hidden
      >
        {tone === "green" ? "1" : tone === "blue" ? "2" : "3"}
      </div>
      <h3 className={cn("text-xl font-bold", t.accent)}>{title}</h3>
      <p className="mt-3 flex-1 text-need-muted">{body}</p>
      <div className="mt-6">
        <CTAButton href={href} size="sm">
          {cta}
        </CTAButton>
      </div>
    </article>
  );
}

type EpisodeCardProps = {
  title: string;
  category: string;
  playLabel: string;
  youtubeId?: string;
  href?: string;
};

export function EpisodeCard({
  title,
  category,
  playLabel,
  youtubeId,
  href = "/sewegna",
}: EpisodeCardProps) {
  const thumbnailUrl = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : null;

  return (
    <article className="overflow-hidden rounded-card bg-white shadow-card">
      <Link href={href} className="group block">
        <div className="relative aspect-[16/10] bg-gradient-to-br from-need-green-800 to-need-green-950">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
          <div className="absolute inset-0 bg-black/20" />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-need-green-900">
            {category}
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full bg-need-orange text-white shadow-soft transition-transform group-hover:scale-105"
              aria-label={playLabel}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
            </span>
          </span>
          <span className="pointer-events-none absolute inset-0 amharic-watermark opacity-40" />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-need-ink sm:text-base">{title}</h3>
        </div>
      </Link>
    </article>
  );
}

type BlogCardProps = {
  title: string;
  category: string;
  meta: string;
  readMore: string;
  href?: string;
  tint?: "blue" | "green" | "orange";
  image?: string;
};

const blogTints = {
  blue: "from-need-blue/30 to-need-blue-100",
  green: "from-need-green-700/30 to-need-green-100",
  orange: "from-need-orange/30 to-need-orange-100",
};

export function BlogCard({
  title,
  category,
  meta,
  readMore,
  href = "/resources",
  tint = "green",
  image,
}: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-card bg-white shadow-card">
      <div className={cn("relative aspect-[16/10] bg-gradient-to-br", blogTints[tint])}>
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-need-green-700">
          {category}
        </p>
        <h3 className="mt-2 text-lg font-bold text-need-ink">{title}</h3>
        <p className="mt-2 text-sm text-need-muted">{meta}</p>
        <Link
          href={href}
          className="mt-4 inline-flex text-sm font-semibold text-need-orange hover:text-need-orange-hover"
        >
          {readMore} →
        </Link>
      </div>
    </article>
  );
}

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  tone?: "blue" | "green" | "orange";
};

const testimonialTones = {
  blue: "bg-need-blue-100",
  green: "bg-need-green-100",
  orange: "bg-need-orange-100",
};

export function TestimonialCard({
  quote,
  name,
  role,
  tone = "green",
}: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        "flex h-full flex-col rounded-card p-6 shadow-card",
        testimonialTones[tone],
      )}
    >
      <p className="flex-1 text-need-ink">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-5">
        <cite className="not-italic">
          <span className="block font-semibold text-need-ink">{name}</span>
          <span className="text-sm text-need-muted">{role}</span>
        </cite>
      </footer>
    </blockquote>
  );
}

type ServiceCardProps = {
  title: string;
  cta: string;
  href: string;
};

export function ServiceCard({ title, cta, href }: ServiceCardProps) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-card border border-need-border bg-white p-5 shadow-card">
      <h3 className="font-semibold text-need-ink">{title}</h3>
      <CTAButton href={href} size="sm" variant="ghost">
        {cta}
      </CTAButton>
    </article>
  );
}
