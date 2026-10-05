import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-semibold tracking-wide uppercase",
            tone === "dark" ? "text-need-orange" : "text-need-green-700",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-need-ink",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg",
            tone === "dark" ? "text-white/80" : "text-need-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
