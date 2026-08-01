import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
  /** Use on dark hero backgrounds */
  variant?: "default" | "light";
};

export default function Breadcrumbs({ items, variant = "default" }: Props) {
  const light = variant === "light";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm ${light ? "text-white/70" : "text-slate-500"}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className={light ? "text-white/40" : "text-slate-300"} aria-hidden>
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  className={
                    isLast
                      ? light
                        ? "font-medium text-white"
                        : "font-medium text-slate-700"
                      : undefined
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={
                    light
                      ? "transition hover:text-white"
                      : "transition hover:text-blue-700"
                  }
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
