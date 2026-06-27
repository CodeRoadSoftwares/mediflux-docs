"use client";

import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  useRef,
  useState,
} from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends ComponentPropsWithoutRef<"pre"> {
  children: ReactNode;
  title?: string;
  "data-title"?: string;
}

export function CodeBlock({
  children,
  title,
  "data-title": dataTitle,
  className,
  ...props
}: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const displayTitle = title ?? dataTitle;

  async function handleCopy() {
    const text = preRef.current?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }

  return (
    <div className="group/code relative my-6">
      {displayTitle && (
        <div
          className={cn(
            "rounded-t-lg border border-b-0 border-border bg-muted px-4 py-2",
            "font-mono text-xs font-medium text-muted-foreground",
          )}
        >
          {displayTitle}
        </div>
      )}

      <div className="relative">
        <pre
          ref={preRef}
          className={cn(
            displayTitle && "!rounded-t-none !mt-0",
            className,
          )}
          {...props}
        >
          {children}
        </pre>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
          className={cn(
            "absolute right-2 top-2 z-10 flex items-center gap-1 rounded-md px-2 py-1.5",
            "border border-border bg-background/80 backdrop-blur-sm",
            "text-xs text-muted-foreground",
            "opacity-0 transition-opacity group-hover/code:opacity-100",
            "hover:bg-muted hover:text-foreground",
            "focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          {copied ? (
            <>
              <Check className="size-3.5" aria-hidden />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" aria-hidden />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
