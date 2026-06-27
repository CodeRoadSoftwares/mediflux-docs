"use client";

import { type ReactNode } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const accordionTriggerClass = cn(
  "group flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-4",
  "text-sm font-bold text-muted-foreground",
  "bg-accent/50 hover:bg-accent hover:text-foreground",
  "data-[state=open]:bg-accent data-[state=open]:text-foreground",
  "transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
);

interface AccordionProps {
  type?: "single" | "multiple";
  children: ReactNode;
  className?: string;
}

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  value?: string;
}

export function Accordion({
  type = "single",
  children,
  className,
}: AccordionProps) {
  const commonProps = {
    className: cn("my-6 space-y-2", className),
    children,
  };

  if (type === "multiple") {
    return <AccordionPrimitive.Root type="multiple" {...commonProps} />;
  }

  return (
    <AccordionPrimitive.Root type="single" collapsible {...commonProps} />
  );
}

export function AccordionItem({ title, children, value }: AccordionItemProps) {
  const itemValue = value ?? title.toLowerCase().replace(/\s+/g, "-");

  return (
    <AccordionPrimitive.Item value={itemValue}>
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className={accordionTriggerClass}>
          <span className="text-left">{title}</span>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
              "group-data-[state=open]:rotate-180"
            )}
            aria-hidden
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content
        className={cn(
          "overflow-hidden text-sm border border-border border-t-0 rounded-md rounded-t-none -mt-3",
          "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
        )}
      >
        <div className="px-3 pb-3 pt-6 text-foreground [&>p:last-child]:mb-0">
          {children}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
