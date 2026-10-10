import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SUPPORT_CONTACTS, type SupportContactId } from "@/lib/support";

const CONTACT_ICONS: Record<SupportContactId, ReactNode> = {
  phone: <Phone className="size-4" aria-hidden />,
  whatsapp: <FaWhatsapp className="size-4" aria-hidden />,
  email: <Mail className="size-4" aria-hidden />,
};

export function HelpContact({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-primary/15 bg-primary-light px-5 py-6 sm:px-6",
        className
      )}
    >
      <h2 className="text-lg font-semibold tracking-tight text-heading">
        Still need help?
      </h2>
      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
        If you cannot find an answer, the MediFlux team is available on WhatsApp,
        phone, and email.
      </p>
      <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
        {SUPPORT_CONTACTS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noreferrer noopener" : undefined
            }
            className={cn(
              "flex items-center gap-3 rounded-xl border border-border/80 bg-background px-3.5 py-3",
              "text-sm shadow-sm transition-colors hover:border-primary"
            )}
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {CONTACT_ICONS[item.id]}
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-heading">{item.title}</span>
              <span className="block truncate text-xs text-muted-foreground">
                {item.description}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
