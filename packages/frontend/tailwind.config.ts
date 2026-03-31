import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB'
      },
      fontFamily: {
        sans: ['Noto Sans Thai', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
