"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 520, damping: 38 });
  const springY = useSpring(mouseY, { stiffness: 520, damping: 38 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - 15);
      mouseY.set(event.clientY - 15);
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, input, textarea, select, [data-cursor]")));
    };

    window.addEventListener("pointermove", handleMove);

    return () => window.removeEventListener("pointermove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden size-8 rounded-full border border-cyan-300/60 mix-blend-difference md:block"
      style={{ x: springX, y: springY }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        animate={{ scale: active ? 2.1 : 0.72, opacity: active ? 0.2 : 0.55 }}
        className="absolute inset-0 rounded-full bg-cyan-300"
      />
    </motion.div>
  );
}
