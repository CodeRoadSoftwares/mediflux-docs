import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RelatedDoc } from "@/lib/help";

export function HelpRelatedDocs({ items }: { items: RelatedDoc[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold tracking-tight text-heading">
        Related documentation
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Read the full guide if you want more detail on this topic.
      </p>
      <ul className="mt-4 grid gap-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "group flex items-start gap-3 rounded-xl border border-border bg-card p-4",
                "transition-colors hover:border-primary"
              )}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-heading">
                  {item.title}
                </span>
                {item.description && (
                  <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                )}
              </span>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
