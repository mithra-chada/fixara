import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        'primary-focus': '#0071E3',
        'primary-dark': '#2997FF',
        ink: '#1D1D1F',
        canvas: '#FBFBFD',
        parchment: '#F5F5F7',
        pearl: '#FAFAFC',
        'tile-dark': '#1C1C1E',
        'tile-dark-2': '#2A2A2C',
        'surface-black': '#000000',
        'muted-body': '#CCCCCC',
        'ink-80': '#333333',
        'ink-48': '#7A7A7A',
        hairline: '#E0E0E0',
        divider: '#F0F0F0',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
      },
      fontFamily: {
        display: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        body: ['Inter', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
        card: '18px',
        utility: '8px',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        product: 'rgba(0,0,0,0.22) 3px 5px 30px 0px',
        glass: '0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08), 0 24px 48px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)',
        'glass-dark': '0 4px 16px rgba(0,0,0,0.30), 0 16px 40px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.10)',
      },
      letterSpacing: {
        hero: '-0.28px',
        display: '-0.374px',
        caption: '-0.224px',
        nav: '-0.12px',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
