"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

export function PopoverContent({
  className,
  align = "end",
  sideOffset = 4,
  ...props
}: PopoverPrimitive.PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        side="bottom"
        className={cn(
          "z-50 min-w-[300px] max-w-[98vw] rounded-xl border bg-popover p-0 text-sm text-popover-foreground shadow-lg",
          "focus-visible:outline-none",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
