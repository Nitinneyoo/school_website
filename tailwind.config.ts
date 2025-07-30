import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#000000',
          200: '#000000',
          400: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // primary: 'hsl(var(--primary))',
      },
    },
  },
  plugins: [],
} satisfies Config
