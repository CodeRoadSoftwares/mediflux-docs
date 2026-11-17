import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { WHATSAPP_MESSAGE } from "@/lib/support";

export function HelpSupportMiniCard() {
  return (
    <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-4 text-left">
      <div className="flex size-8 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
        <MessageCircleQuestion className="size-4" aria-hidden />
      </div>
      <h4 className="mt-3 text-xs font-bold text-heading">
        Can&apos;t find an answer?
      </h4>
      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
        Our pharmacy specialists respond in ~10 minutes on WhatsApp.
      </p>
      <a
        href={`https://wa.me/919103667857?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:text-teal-400"
      >
        Talk to a human <ArrowRight className="size-3" aria-hidden />
      </a>
    </div>
  );
}
