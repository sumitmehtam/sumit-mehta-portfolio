"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CommandMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const commands = [
  { label: "View Projects", href: "#projects", icon: BriefcaseBusiness },
  { label: "Explore Services", href: "#services", icon: Sparkles },
  { label: "See Skills", href: "#skills", icon: Code2 },
  { label: "Start a Project", href: "#contact", icon: Mail }
];

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(true);
      }

      if (event.key === "Escape") onOpenChange(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onOpenChange]);

  const goTo = (href: string) => {
    onOpenChange(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 90);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[80] grid place-items-start bg-black/55 px-4 pt-28 backdrop-blur-xl sm:place-items-center sm:pt-0"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Command menu"
          onMouseDown={() => onOpenChange(false)}
        >
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="command-panel"
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            onMouseDown={(event) => event.stopPropagation()}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <div>
                <p className="font-display text-lg font-medium">Navigate</p>
                <p className="text-sm text-muted-foreground">Sumit Mehta portfolio</p>
              </div>
              <Button onClick={() => onOpenChange(false)} size="sm" variant="outline">
                Close
              </Button>
            </div>
            <div className="flex flex-col gap-2 p-3">
              {commands.map((command) => {
                const Icon = command.icon;

                return (
                  <button
                    className={cn(
                      "group flex w-full items-center justify-between rounded-card border border-transparent p-4 text-left transition duration-300",
                      "hover:border-primary/40 hover:bg-primary/10"
                    )}
                    key={command.href}
                    onClick={() => goTo(command.href)}
                    type="button"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-card border border-border bg-secondary">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="font-medium">{command.label}</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="opacity-45 transition group-hover:opacity-100" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
