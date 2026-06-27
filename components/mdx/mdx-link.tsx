import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export function MdxLink({
  href,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  // MDX may pass non-DOM props (e.g. node); only forward safe anchor attributes.
  const { title, id } = props;
  const anchorProps = { title, id, className };
  if (!href) {
    return (
      <a {...anchorProps}>
        {children}
      </a>
    );
  }

  const isInternal =
    href.startsWith("/") ||
    href.startsWith("#") ||
    (!href.startsWith("http://") &&
      !href.startsWith("https://") &&
      !href.startsWith("mailto:") &&
      !href.startsWith("tel:"));

  if (isInternal) {
    return (
      <Link href={href} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...anchorProps}
    >
      {children}
    </a>
  );
}
