/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      colors: {
        ink: "#04060a",
        panel: "#070b12",
      },
      animation: {
        "float-slow": "floaty 16s ease-in-out infinite",
        "float-med": "floaty 11s ease-in-out infinite",
        marquee: "marquee 95s linear infinite",
        shimmer: "shimmer 8s linear infinite",
        "pulse-glow": "pulseGlow 3.4s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
        orbit: "orbit 14s linear infinite",
        blink: "tick 1.1s steps(2) infinite",
        "border-flow": "borderFlow 6s linear infinite",
        "fade-up": "fadeUp .7s cubic-bezier(.22,1,.36,1) both",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "33%": { transform: "translateY(-30px) translateX(20px) scale(1.06)" },
          "66%": { transform: "translateY(18px) translateX(-16px) scale(0.96)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        tick: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "300% 50%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(14px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(14px) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
