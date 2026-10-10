import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      className={cn("mb-2 flex items-center gap-1", className)}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1 text-primary font-medium">
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {item.url ? (
            <Link
              href={item.url}
              className="text-primary hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ) : (
            <span>{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
