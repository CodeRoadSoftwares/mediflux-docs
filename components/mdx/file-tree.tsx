"use client";

import { type ReactNode, useState, Children, isValidElement } from "react";
import { ChevronRight, File, Folder, FolderOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FileTreeProps {
  children: ReactNode;
  className?: string;
}

interface FileTreeFolderProps {
  name: string;
  defaultOpen?: boolean;
  children?: ReactNode;
}

interface FileTreeFileProps {
  name: string;
  active?: boolean;
}

export function FileTree({ children, className }: FileTreeProps) {
  return (
    <div
      className={cn(
        "my-6 rounded-lg border border-border bg-card overflow-hidden",
        className,
      )}
    >
      <div className="p-3 text-sm">{children}</div>
    </div>
  );
}

export function FileTreeFolder({
  name,
  defaultOpen = false,
  children,
}: FileTreeFolderProps) {
  const [open, setOpen] = useState(defaultOpen);
  const hasChildren = Children.count(children) > 0;

  return (
    <div>
      <button
        type="button"
        onClick={() => hasChildren && setOpen((o) => !o)}
        className={cn(
          "flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-left",
          "text-foreground transition-colors hover:bg-muted/70",
          !hasChildren && "cursor-default",
        )}
      >
        <ChevronRight
          className={cn(
            "size-3.5 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-90",
            !hasChildren && "invisible",
          )}
          aria-hidden
        />
        {open ? (
          <FolderOpen className="size-4 shrink-0 text-blue-500" aria-hidden />
        ) : (
          <Folder className="size-4 shrink-0 text-blue-500" aria-hidden />
        )}
        <span className="font-medium">{name}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-4 border-l border-border pl-2">
              {Children.map(children, (child) => {
                if (isValidElement(child)) return child;
                return null;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FileTreeFile({ name, active }: FileTreeFileProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-md px-1.5 py-1",
        "text-muted-foreground",
        active && "bg-primary/10 text-primary font-medium",
      )}
    >
      <span className="size-3.5 shrink-0" aria-hidden />
      <File className="size-4 shrink-0" aria-hidden />
      <span className="text-sm">{name}</span>
    </div>
  );
}
