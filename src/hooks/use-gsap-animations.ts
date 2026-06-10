"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapAnimations(enabled = true) {
  useEffect(() => {
    if (!enabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 80,
            rotateX: 12,
            filter: "blur(18px)",
            transformPerspective: 900
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%"
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-text-mask]").forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.05,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%"
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        const depth = Number(element.dataset.parallax || 24);
        gsap.to(element, {
          y: -depth,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      const timelineLine = document.querySelector<HTMLElement>("[data-timeline-line]");
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineLine,
              start: "top 74%",
              end: "bottom 50%",
              scrub: true
            }
          }
        );
      }

      const projectSection = document.querySelector<HTMLElement>("[data-projects-section]");
      const projectTrack = document.querySelector<HTMLElement>("[data-projects-track]");

      if (projectSection && projectTrack && window.innerWidth >= 900) {
        const getDistance = () => Math.max(0, projectTrack.scrollWidth - window.innerWidth + 96);

        gsap.to(projectTrack, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: projectSection,
            start: "top top",
            end: () => `+=${getDistance() + 760}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });
      }
    });

    return () => ctx.revert();
  }, [enabled]);
}
