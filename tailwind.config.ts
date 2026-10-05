import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",
          navy: "#0A2540",
          blue: "#1E3A8A",
          primary: "#1D4ED8",
          tech: "#2563EB",
          lightBlue: "#3B82F6",
          sky: "#0284C7",
          cyan: "#06B6D4",
          emerald: "#10B981",
          emeraldDark: "#059669",
          emeraldLight: "#34D399",
          greenBg: "#ECFDF5",
          slateBg: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "Caveat", "cursive"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -2px rgba(0, 0, 0, 0.03)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.06), 0 4px 10px -2px rgba(0, 0, 0, 0.03)",
        elevated: "0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 10px 15px -3px rgba(0, 0, 0, 0.04)",
        glow: "0 0 25px rgba(16, 185, 129, 0.35)",
        blueGlow: "0 0 30px rgba(37, 99, 235, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
