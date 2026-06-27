"use client";

import { type ReactNode, useState, Children, isValidElement } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabsProps {
  defaultValue?: string;
  items?: string[];
  children: ReactNode;
  className?: string;
}

interface TabProps {
  value: string;
  label?: string;
  children: ReactNode;
}

export function Tabs({ defaultValue, items, children, className }: TabsProps) {
  const tabs: { value: string; label: string; content: ReactNode }[] = [];
  const childArray = Children.toArray(children);

  childArray.forEach((child) => {
    if (isValidElement(child) && child.props) {
      const props = child.props as TabProps;
      if (props.value) {
        tabs.push({
          value: props.value,
          label: props.label || props.value,
          content: props.children,
        });
      }
    }
  });

  const resolvedDefault = defaultValue || (items && items[0]) || (tabs[0]?.value ?? "");
  const [activeTab, setActiveTab] = useState(resolvedDefault);

  return (
    <TabsPrimitive.Root
      value={activeTab}
      onValueChange={setActiveTab}
      className={cn("my-6", className)}
    >
      <TabsPrimitive.List className="flex gap-1 overflow-x-auto rounded-lg border border-border bg-muted/50 p-1">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              "text-muted-foreground hover:text-foreground",
              "data-[state=active]:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            )}
          >
            {activeTab === tab.value && (
              <motion.span
                layoutId="tabs-active-indicator"
                className="absolute inset-0 rounded-md bg-background shadow-sm"
                style={{ zIndex: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      <AnimatePresence mode="wait">
        {tabs.map(
          (tab) =>
            activeTab === tab.value && (
              <TabsPrimitive.Content
                key={tab.value}
                value={tab.value}
                forceMount
                className="mt-3 focus-visible:outline-none"
              >
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.content}
                </motion.div>
              </TabsPrimitive.Content>
            ),
        )}
      </AnimatePresence>
    </TabsPrimitive.Root>
  );
}

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}
