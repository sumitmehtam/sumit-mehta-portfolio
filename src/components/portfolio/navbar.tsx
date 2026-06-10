"use client";

import { useEffect, useState } from "react";
import { Moon, Search, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/portfolio/motion-primitives";

type NavbarProps = {
  theme: "dark" | "light";
  onThemeToggle: () => void;
  onCommandOpen: () => void;
};

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export function Navbar({ theme, onThemeToggle, onCommandOpen }: NavbarProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;

    const update = () => {
      const current = window.scrollY;
      setHidden(current > previous && current > 120);
      previous = current;
    };

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-[1440px] -translate-x-1/2 transition duration-500",
        hidden ? "-translate-y-28 opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      <nav className="nav-shell">
        <a aria-label="Sumit Mehta home" className="flex items-center gap-3" href="#top">
          <span className="brand-mark">S</span>
          <span className="hidden font-display text-lg font-medium sm:block">Sumit Mehta</span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            aria-label="Open command menu"
            className="hidden sm:inline-flex"
            onClick={onCommandOpen}
            size="icon"
            title="Open command menu"
            variant="outline"
          >
            <Search aria-hidden="true" />
          </Button>
          <Button
            aria-label="Toggle color theme"
            onClick={onThemeToggle}
            size="icon"
            title="Toggle color theme"
            variant="outline"
          >
            {theme === "dark" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
          </Button>
          <MagneticButton className="hidden sm:inline-flex" href="#contact" size="sm">
            Let&apos;s Talk
          </MagneticButton>
        </div>
      </nav>
    </header>
  );
}
