import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'off-white': '#FAFAF7',
        'deep-black': '#0a0a14', // Updated to Dark Navy
        'accent': '#c5a367',     // Updated to Gold/Bronze
        'accent-light': '#d4bc8d',
        'navy-dark': '#0a0a14',
        'navy-light': '#151525',
        'soft-white': '#fafafa',
        'muted': '#86868B',
        'border': '#E8E8ED',
        'surface': '#F2F2F0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
