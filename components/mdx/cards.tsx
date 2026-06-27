"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePageMetaMap } from "@/lib/docs-icon-context";
import { LucideIcon, linkSurfaceClass, resolveCardContent } from "./card-utils";

interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
  href?: string;
  children?: ReactNode;
  className?: string;
}

interface CardGroupProps {
  cols?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

const colsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function CardGroup({ cols = 2, children, className }: CardGroupProps) {
  return (
    <div className={cn("my-6 grid items-stretch gap-3", colsMap[cols], className)}>
      {children}
    </div>
  );
}

export function Card({
  title,
  description,
  icon,
  href,
  children,
  className,
}: CardProps) {
  const pageMetaMap = usePageMetaMap();
  const resolved = resolveCardContent(href, pageMetaMap, { title, description, icon });

  const content = (
    <div
      className={cn(
        linkSurfaceClass,
        "flex h-full min-h-0 flex-col",
        href && "cursor-pointer",
        className
      )}
    >
      {href && (
        <ArrowRight
          className={cn(
            "absolute right-4 top-4 size-4 text-muted-foreground",
            "transition-colors group-hover:text-primary group-hover:translate-x-1 transition-transform duration-200"
          )}
          aria-hidden
        />
      )}

      <div className={cn("flex flex-col gap-2", href && "pr-6")}>
        {resolved.icon && (
          <div
            className={cn(
              "flex size-9 items-center justify-center rounded-md",
              "bg-primary/10 text-primary"
            )}
          >
            <LucideIcon name={resolved.icon} className="size-5" />
          </div>
        )}

        {resolved.title && (
          <p className="text-lg font-semibold text-heading no-underline !mt-1 !mb-0 !py-0">
            {resolved.title}
          </p>
        )}

        {resolved.description && (
          <p className="text-sm leading-relaxed text-muted-foreground no-underline !-mt-2 !mb-0">
            {resolved.description}
          </p>
        )}

        {children && (
          <div className="text-sm text-muted-foreground">{children}</div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group flex h-full min-h-0 no-underline decoration-none hover:no-underline [&_*]:no-underline"
      >
        {content}
      </Link>
    );
  }

  return <div className="h-full min-h-0">{content}</div>;
}
