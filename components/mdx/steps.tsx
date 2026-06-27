"use client";

import { type ReactNode, Children, isValidElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StepsProps {
  children: ReactNode;
  className?: string;
}

interface StepProps {
  title?: string;
  children: ReactNode;
}

export function Steps({ children, className }: StepsProps) {
  const steps = Children.toArray(children).filter(isValidElement);

  return (
    <div className={cn("my-6", className)}>
      <div className="relative space-y-0">
        {steps.map((child, index) => {
          const props = child.props as StepProps;
          return (
            <StepItem
              key={index}
              index={index}
              title={props.title}
              isLast={index === steps.length - 1}
            >
              {props.children}
            </StepItem>
          );
        })}
      </div>
    </div>
  );
}

function StepItem({
  index,
  title,
  isLast,
  children,
}: {
  index: number;
  title?: string;
  isLast: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="relative flex gap-4 pb-8 last:pb-0"
    >
      {!isLast && (
        <div
          className="absolute left-[15px] top-10 -bottom-2 w-px bg-border"
          aria-hidden
        />
      )}
      <div
        className={cn(
          "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full",
          "border-2 border-primary bg-background text-sm font-bold text-primary",
        )}
      >
        {index + 1}
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        {title && (
          <p className="mb-2 text-xl font-semibold leading-snug text-heading">
            {title}
          </p>
        )}
        <div className="text-sm text-muted-foreground [&>p:last-child]:mb-0 [&>h3]:text-base [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mb-2 [&>h3]:mt-0">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function Step({ children }: StepProps) {
  return <>{children}</>;
}
