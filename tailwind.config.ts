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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Deep forest green — seriös, Natur, Gesundheit
        primary: {
          DEFAULT: "#1e3a2f",
          mid: "#2d5a45",
          light: "#3d7a5e",
        },
        // Warm gold — Energie, Wärme, Qualität
        accent: {
          DEFAULT: "#c9942a",
          dark: "#a67818",
          light: "#e0b44a",
        },
        sand: {
          DEFAULT: "#f8f7f4", // warm off-white background
          dark: "#ede9e1",
        }
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.8' }],
        lg: ['1.25rem', { lineHeight: '1.8' }],
        xl: ['1.5rem', { lineHeight: '1.75' }],
        '2xl': ['1.875rem', { lineHeight: '1.3' }],
        '3xl': ['2.25rem', { lineHeight: '1.2' }],
        '4xl': ['3rem', { lineHeight: '1.1' }],
        '5xl': ['3.75rem', { lineHeight: '1.05' }],
      },
      gridTemplateColumns: {
        // Golden Ratio: 61.8% / 38.2%
        golden: '61.8fr 38.2fr',
        // Inverse golden ratio for image-first variants
        'golden-inv': '38.2fr 61.8fr',
      },
    },
  },
  plugins: [],
};
export default config;
