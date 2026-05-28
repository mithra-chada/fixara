import type { Config } from "tailwindcss";

const config: Config = {
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
        canvas: '#FFFFFF',
        parchment: '#F5F5F7',
        pearl: '#FAFAFC',
        'tile-dark': '#272729',
        'tile-dark-2': '#2A2A2C',
        'surface-black': '#000000',
        'muted-body': '#CCCCCC',
        'ink-80': '#333333',
        'ink-48': '#7A7A7A',
        hairline: '#E0E0E0',
        divider: '#F0F0F0',
      },
      fontFamily: {
        display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        body: ['SF Pro Text', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
        card: '18px',
        utility: '8px',
        input: '9999px',
      },
      boxShadow: {
        product: 'rgba(0,0,0,0.22) 3px 5px 30px 0px',
      },
      letterSpacing: {
        hero: '-0.28px',
        display: '-0.374px',
        caption: '-0.224px',
        nav: '-0.12px',
      },
    },
  },
  plugins: [],
};
export default config;
