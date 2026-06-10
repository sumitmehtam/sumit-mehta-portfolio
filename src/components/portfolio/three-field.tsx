"use client";

import { useRef } from "react";

import { useThreeField } from "@/hooks/use-three-field";

export function ThreeField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useThreeField(canvasRef);

  return <canvas aria-hidden="true" className="hero-three-canvas" ref={canvasRef} />;
}
