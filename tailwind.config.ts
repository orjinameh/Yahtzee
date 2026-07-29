import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        felt: {
          DEFAULT: "#0B3D2E",
          dark: "#082B20",
          light: "#164F3B",
        },
        paper: {
          DEFAULT: "#F2EAD3",
          dark: "#E8DEC0",
        },
        ivory: "#FFFDF6",
        pip: "#C1272D",
        graphite: "#2B2B2B",
        gold: "#C6A15B",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex)", "monospace"],
      },
      boxShadow: {
        die: "inset 0 0 0 2px rgba(43,43,43,0.15), 0 6px 0 rgba(0,0,0,0.25)",
        card: "0 12px 0 rgba(8,43,32,0.6)",
      },
      backgroundImage: {
        felt: "radial-gradient(ellipse at top, #164F3B 0%, #0B3D2E 60%, #082B20 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
