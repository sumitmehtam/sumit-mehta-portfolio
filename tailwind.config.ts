import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        }
      },
      boxShadow: {
        glow: "0 0 42px rgba(59, 130, 246, 0.28)",
        "glow-cyan": "0 0 54px rgba(34, 211, 238, 0.22)"
      },
      borderRadius: {
        card: "8px"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleX(0.72)" },
          "50%": { opacity: "1", transform: "scaleX(1)" }
        }
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        "spin-slow": "spinSlow 24s linear infinite",
        "pulse-line": "pulseLine 2.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
