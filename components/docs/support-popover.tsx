"use client";

import { useState, type ReactNode } from "react";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { mobileMenuItemClass } from "./theme-toggle";

const WHATSAPP_MESSAGE =
  "Hi, I'm using the MediFlux and need help. Could you please assist me?";

const SUPPORT_OPTIONS = [
  {
    title: "Phone",
    description: "+91 91036 67857",
    href: "tel:+919103667857",
    icon: <Phone className="size-4" aria-hidden />,
  },
  {
    title: "WhatsApp",
    description: "+91 91036 67857",
    href: `https://wa.me/919103667857?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    icon: <FaWhatsapp className="size-4" aria-hidden />,
  },
  {
    title: "Email",
    description: "support@mflx.in",
    href: "mailto:support@mflx.in",
    icon: <Mail className="size-4" aria-hidden />,
  },
];

function IconBox({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-md border border-border",
        "bg-background text-foreground"
      )}
    >
      {children}
    </div>
  );
}

interface SupportPopoverProps {
  variant?: "header" | "menu";
  className?: string;
}

export function SupportPopover({ variant = "header", className }: SupportPopoverProps) {
  const [open, setOpen] = useState(false);

  const triggerClass =
    variant === "menu"
      ? cn(mobileMenuItemClass, "w-full cursor-pointer", className)
      : cn(
          "inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium",
          "text-muted-foreground hover:text-foreground bg-accent/50 hover:bg-accent",
          "transition-colors duration-200 cursor-pointer",
          "data-[state=open]:bg-accent data-[state=open]:text-foreground",
          className
        );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" className={triggerClass}>
          Support
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-[min(100vw-2rem,320px)] p-1.5" align={variant === "menu" ? "start" : "end"}>
        {SUPPORT_OPTIONS.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
            onClick={() => setOpen(false)}
            className={cn(
              "flex w-full items-start gap-3 rounded-lg px-2 py-2.5 text-left transition-colors",
              "hover:bg-accent"
            )}
          >
            <IconBox>{item.icon}</IconBox>
            <div className="min-w-0 flex-1">
              <span className="text-sm font-medium text-heading">{item.title}</span>
              <p className="text-xs leading-snug text-muted-foreground">{item.description}</p>
            </div>
          </a>
        ))}
      </PopoverContent>
    </Popover>
  );
}
