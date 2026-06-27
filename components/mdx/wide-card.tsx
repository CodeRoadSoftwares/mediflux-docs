"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePageMetaMap } from "@/lib/docs-icon-context";
import { LucideIcon, linkSurfaceClass, resolveCardContent } from "./card-utils";

interface WideCardProps {
  title?: string;
  description?: string;
  icon?: string;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  children?: ReactNode;
  className?: string;
}

interface WideCardsProps {
  children: ReactNode;
  className?: string;
}

const linkWrapperClass =
  "group block w-full no-underline decoration-none hover:no-underline [&_*]:no-underline";

export function WideCards({ children, className }: WideCardsProps) {
  return (
    <div className={cn("my-6 flex w-full flex-col gap-3", className)}>
      {children}
    </div>
  );
}

export function WideCard({
  title,
  description,
  icon,
  href,
  target,
  children,
  className,
}: WideCardProps) {
  const pageMetaMap = usePageMetaMap();
  const resolved = resolveCardContent(href, pageMetaMap, { title, description, icon });

  const linkTarget = target ?? (resolved.external ? "_blank" : undefined);
  const rel = linkTarget === "_blank" ? "noopener noreferrer" : undefined;

  const content = (
    <div className={cn(linkSurfaceClass, href && "cursor-pointer", className)}>
      {href && (
        <ArrowUpRight
          className={cn(
            "absolute right-4 top-4 size-4 text-muted-foreground",
            "transition-colors group-hover:text-primary"
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

  if (!href) {
    return content;
  }

  if (resolved.external) {
    return (
      <a
        href={href}
        target={linkTarget}
        rel={rel}
        className={linkWrapperClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} target={linkTarget} rel={rel} className={linkWrapperClass}>
      {content}
    </Link>
  );
}
