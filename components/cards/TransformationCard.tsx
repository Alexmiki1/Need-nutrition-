import { cn } from "@/lib/cn";

export type Transformation = {
  category: string;
  result: string;
  timeframe: string;
  body: string;
  name?: string;
  tone: "loss" | "gain";
};

type TransformationCardProps = {
  item: Transformation;
  className?: string;
};

export function TransformationCard({ item, className }: TransformationCardProps) {
  const isLoss = item.tone === "loss";

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-need bg-white shadow-card",
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/11] bg-gradient-to-br",
          isLoss
            ? "from-need-orange-100 via-need-cream to-need-orange/20"
            : "from-need-green-100 via-need-cream to-need-green-700/20",
        )}
        role="img"
        aria-label={`${item.category} transformation photo placeholder`}
      >
        <div className="absolute inset-0 flex">
          {isLoss ? (
            <>
              <div className="flex w-1/2 items-end justify-center border-r border-white/40 bg-black/5 pb-4 text-xs font-semibold text-need-muted">
                Before
              </div>
              <div className="flex w-1/2 items-end justify-center bg-black/0 pb-4 text-xs font-semibold text-need-green-800">
                After
              </div>
            </>
          ) : (
            <div className="flex w-full items-end justify-center pb-4 text-xs font-semibold text-need-green-800">
              Healthy weight gain
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p
            className={cn(
              "text-xs font-bold tracking-wide uppercase",
              isLoss ? "text-need-orange" : "text-need-green-800",
            )}
          >
            {item.category}
          </p>
          {item.name ? (
            <span className="rounded-full bg-need-green-100 px-2.5 py-0.5 text-xs font-semibold text-need-green-900">
              {item.name}
            </span>
          ) : null}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold text-white",
              isLoss ? "bg-need-orange" : "bg-need-green-800",
            )}
          >
            <span aria-hidden>{isLoss ? "↓" : "↑"}</span>
            {item.result}
          </span>
          <span className="text-sm font-semibold text-need-ink">{item.timeframe}</span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-need-muted">
          {item.body}
        </p>
      </div>
    </article>
  );
}
