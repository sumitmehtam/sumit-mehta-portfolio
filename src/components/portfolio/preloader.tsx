"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type PreloaderProps = {
  onComplete: () => void;
};

const lines = ["SUMIT", "MEHTA"];

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setProgress(100);
      const complete = window.setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 120);

      return () => window.clearTimeout(complete);
    }

    const start = performance.now();
    const duration = 2200;
    let frame = 0;

    const tick = (time: number) => {
      const next = Math.min(100, Math.round(((time - start) / duration) * 100));
      setProgress(next);

      if (next < 100) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    const finish = window.setTimeout(() => setVisible(false), duration + 260);
    const complete = window.setTimeout(onComplete, duration + 980);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(finish);
      window.clearTimeout(complete);
    };
  }, [onComplete, shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#050505] text-white"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] }
          }}
          initial={{ clipPath: "inset(0 0 0 0)" }}
        >
          <div className="preloader-grid" />
          <div className="relative flex w-full max-w-5xl flex-col gap-8 px-8">
            <div className="flex flex-col gap-1 font-display text-7xl font-semibold leading-none md:text-9xl">
              {lines.map((line, lineIndex) => (
                <span aria-label={line} className="flex overflow-hidden" key={line}>
                  {line.split("").map((letter, index) => (
                    <motion.span
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      className="inline-block"
                      initial={{ y: "110%", opacity: 0, filter: "blur(16px)" }}
                      key={`${line}-${letter}-${index}`}
                      transition={{
                        delay: lineIndex * 0.2 + index * 0.055,
                        duration: 0.78,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <div className="h-px flex-1 overflow-hidden bg-white/10">
                <motion.div
                  animate={{ scaleX: progress / 100 }}
                  className="h-full origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400"
                  initial={{ scaleX: 0 }}
                />
              </div>
              <span className="w-14 text-right font-display text-lg tabular-nums">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
