"use client";

import { RefObject, useEffect } from "react";
import * as THREE from "three";

export function useThreeField(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 18;

    const particleCount = 420;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color("#3b82f6");
    const colorB = new THREE.Color("#22d3ee");
    const colorC = new THREE.Color("#8b5cf6");

    for (let i = 0; i < particleCount; i += 1) {
      const stride = i * 3;
      positions[stride] = (Math.random() - 0.5) * 34;
      positions[stride + 1] = (Math.random() - 0.5) * 18;
      positions[stride + 2] = (Math.random() - 0.5) * 14;

      const color = i % 3 === 0 ? colorA : i % 3 === 1 ? colorB : colorC;
      colors[stride] = color.r;
      colors[stride + 1] = color.g;
      colors[stride + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const grid = new THREE.GridHelper(34, 26, "#1d4ed8", "#0f172a");
    grid.rotation.x = Math.PI / 2;
    grid.position.z = -5.5;
    grid.material.opacity = 0.15;
    grid.material.transparent = true;
    scene.add(grid);

    const mouse = new THREE.Vector2(0, 0);
    const handlePointer = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / Math.max(rect.height, 1);
      camera.updateProjectionMatrix();
    };

    let frame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      points.rotation.y = elapsed * 0.025 + mouse.x * 0.08;
      points.rotation.x = mouse.y * 0.05;
      grid.rotation.z = elapsed * 0.012;
      camera.position.x += (mouse.x * 0.65 - camera.position.x) * 0.035;
      camera.position.y += (-mouse.y * 0.35 - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [canvasRef]);
}
