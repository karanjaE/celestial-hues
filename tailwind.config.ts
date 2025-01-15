import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderColor: {
        border: "hsl(var(--border))",
      },
      backgroundColor: {
        background: "hsl(var(--background))",
      },
      textColor: {
        foreground: "hsl(var(--foreground))",
      },
      colors: {
        yinmn: {
          50: "#f5f7fa",
          100: "#ebeef4",
          200: "#d3dae6",
          300: "#adbcd1",
          400: "#8198b8",
          500: "#6179a1",
          600: "#4c6186",
          700: "#3e4d6c",
          800: "#36435b",
          900: "#313a4d",
          950: "#212734",
        },
        berkeley: {
          50: "#f4f6fa",
          100: "#e8ecf4",
          200: "#cbd7e7",
          300: "#9eb5d3",
          400: "#6b8fbc",
          500: "#4b71a5",
          600: "#3a5a8b",
          700: "#304971",
          800: "#2b3f5f",
          900: "#273551",
          950: "#1a2335",
        },
        flash: {
          50: "#fff9ed",
          100: "#fff1d3",
          200: "#ffdfa5",
          300: "#ffc86d",
          400: "#ffa632",
          500: "#ff870a",
          600: "#ff6b00",
          700: "#cc4e02",
          800: "#a13c0b",
          900: "#82330c",
          950: "#461604",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;