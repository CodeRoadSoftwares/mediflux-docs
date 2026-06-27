import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function ResponsiveTable({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"table">) {
  return (
    <div
      className={cn(
        "my-5 block w-full min-w-0 overflow-x-auto rounded-lg border border-border",
        "[scrollbar-width:thin]"
      )}
    >
      <table
        className={cn(
          "w-full min-w-full table-fixed text-sm",
          "[&_td]:align-top [&_th]:text-left",
          "[&_code]:break-all [&_code]:whitespace-normal",
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}
