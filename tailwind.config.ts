import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        yinmn: {
          DEFAULT: "#1d497c",
          100: "#060f19",
          200: "#0c1d32",
          300: "#112c4a",
          400: "#173b63",
          500: "#1d497c",
          600: "#2b6cb6",
          700: "#518fd6",
          800: "#8bb5e4",
          900: "#c5daf1",
        },
        berkeley: {
          DEFAULT: "#14355a",
          100: "#040b12",
          200: "#081525",
          300: "#0c2037",
          400: "#102b4a",
          500: "#14355a",
          600: "#235c9d",
          700: "#3b83d4",
          800: "#7dace2",
          900: "#bed6f1",
        },
        cadet: {
          DEFAULT: "#8ca3bb",
          100: "#182029",
          200: "#304152",
          300: "#48617b",
          400: "#6281a3",
          500: "#8ca3bb",
          600: "#a2b5c9",
          700: "#bac7d6",
          800: "#d1dae4",
          900: "#e8ecf1",
        },
        flash: {
          DEFAULT: "#e6eaef",
          100: "#252e39",
          200: "#495c72",
          300: "#748aa6",
          400: "#adbaca",
          500: "#e6eaef",
          600: "#ebeef2",
          700: "#f0f2f5",
          800: "#f5f7f9",
          900: "#fafbfc",
        },
        orange: {
          DEFAULT: "#f99c05",
          100: "#321f01",
          200: "#643e02",
          300: "#965e03",
          400: "#c87d04",
          500: "#f99c05",
          600: "#fbb037",
          700: "#fcc469",
          800: "#fdd79b",
          900: "#feebcd",
        },
        jasper: {
          DEFAULT: "#d04539",
          100: "#2b0d0a",
          200: "#561a14",
          300: "#81261e",
          400: "#ac3328",
          500: "#d04539",
          600: "#da6a60",
          700: "#e39088",
          800: "#ecb5b0",
          900: "#f6dad7",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;