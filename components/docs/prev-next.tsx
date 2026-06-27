import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterNavItem {
  name: string;
  url: string;
}

interface PrevNextProps {
  previous?: FooterNavItem;
  next?: FooterNavItem;
}

export function PrevNext({ previous, next }: PrevNextProps) {
  if (!previous && !next) return null;

  return (
    <div className="mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row">
      {previous ? (
        <Link
          href={previous.url}
          className={cn(
            "group flex min-w-0 flex-1 items-center gap-3 rounded-lg border p-4 transition-colors",
            "hover:border-foreground/20 hover:bg-accent/50"
          )}
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground">Previous</div>
            <div className="truncate text-sm font-bold">{previous.name}</div>
          </div>
        </Link>
      ) : (
        <div className="hidden min-w-0 flex-1 sm:block" />
      )}
      {next ? (
        <Link
          href={next.url}
          className={cn(
            "group flex min-w-0 flex-1 items-center justify-end gap-3 rounded-lg border p-4 transition-colors",
            "hover:border-foreground/20 hover:bg-accent/50"
          )}
        >
          <div className="min-w-0 text-right">
            <div className="text-xs text-muted-foreground">Next</div>
            <div className="truncate text-sm font-bold">{next.name}</div>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div className="hidden min-w-0 flex-1 sm:block" />
      )}
    </div>
  );
}
