"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MagneticButtonProps = ButtonProps & {
  href?: string;
  external?: boolean;
  download?: boolean | string;
};

function setRipple(event: React.PointerEvent<HTMLElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
  target.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
  target.classList.remove("is-rippling");
  window.requestAnimationFrame(() => target.classList.add("is-rippling"));
}

function handleMagneticMove(event: React.MouseEvent<HTMLElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;
  target.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`;
}

function resetMagnetic(event: React.MouseEvent<HTMLElement>) {
  event.currentTarget.style.transform = "translate3d(0, 0, 0)";
}

export function MagneticButton({
  href,
  external,
  download,
  className,
  variant,
  size,
  children,
  ...props
}: MagneticButtonProps) {
  const classes = cn(
    buttonVariants({ variant, size }),
    "magnetic-surface will-change-transform",
    className
  );

  if (href) {
    return (
      <a
        className={classes}
        download={download}
        href={href}
        onMouseLeave={resetMagnetic}
        onMouseMove={handleMagneticMove}
        onPointerDown={setRipple}
        rel={external ? "noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onMouseLeave={resetMagnetic}
      onMouseMove={handleMagneticMove}
      onPointerDown={setRipple}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

type TiltCardProps = React.HTMLAttributes<HTMLDivElement> & {
  intensity?: number;
};

export function TiltCard({ className, children, intensity = 10, ...props }: TiltCardProps) {
  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${-y * intensity}deg`);
    card.style.setProperty("--tilt-y", `${x * intensity}deg`);
    card.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    card.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  };

  const handleLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "50%");
  };

  return (
    <div
      className={cn("tilt-card", className)}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      {...props}
    >
      {children}
    </div>
  );
}

export function InlineArrow() {
  return <ArrowUpRight aria-hidden="true" data-icon="inline-end" />;
}
