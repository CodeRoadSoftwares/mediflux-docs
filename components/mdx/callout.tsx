"use client";

import { type ReactNode } from "react";
import {
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "success" | "danger" | "note";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutConfig: Record<
  CalloutType,
  { icon: LucideIcon; label: string; className: string }
> = {
  info: {
    icon: Info,
    label: "Info",
    className:
      "border-l-blue-500 bg-blue-50/60 text-blue-900 dark:bg-blue-950/30 dark:text-blue-200",
  },
  warning: {
    icon: AlertTriangle,
    label: "Warning",
    className:
      "border-l-amber-500 bg-amber-50/60 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200",
  },
  success: {
    icon: CheckCircle,
    label: "Success",
    className:
      "border-l-emerald-500 bg-emerald-50/60 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200",
  },
  danger: {
    icon: XCircle,
    label: "Danger",
    className:
      "border-l-red-500 bg-red-50/60 text-red-900 dark:bg-red-950/30 dark:text-red-200",
  },
  note: {
    icon: Lightbulb,
    label: "Note",
    className:
      "border-l-purple-500 bg-purple-50/60 text-purple-900 dark:bg-purple-950/30 dark:text-purple-200",
  },
};

const iconColor: Record<CalloutType, string> = {
  info: "text-blue-500",
  warning: "text-amber-500",
  success: "text-emerald-500",
  danger: "text-red-500",
  note: "text-purple-500",
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "my-6 rounded-r-lg border-l-4 p-4",
        config.className,
      )}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={cn("mt-0.5 size-5 shrink-0", iconColor[type])}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          {title && (
            <p className="mb-1 font-semibold leading-snug">{title}</p>
          )}
          <div className="text-sm leading-relaxed [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
