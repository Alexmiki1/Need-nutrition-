import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  label?: string;
};

export function Breadcrumbs({
  items,
  className,
  label = "Breadcrumb",
}: BreadcrumbsProps) {
  return (
    <nav aria-label={label} className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-white/75">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="text-white/40">
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(isLast && "font-medium text-white")}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
