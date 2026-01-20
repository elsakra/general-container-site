/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'hidden',
    'block',
    'flex',
    'grid',
    'sm:block',
    'sm:hidden',
    'sm:flex',
    'md:block',
    'md:hidden',
    'md:flex',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'lg:block',
    'lg:hidden',
    'lg:flex',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
  ],
  theme: {
    extend: {
      colors: {
        // Industrial blue palette (primary)
        brand: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#b9d8ff',
          300: '#7cb8ff',
          400: '#3690ff',
          500: '#0b6bff',
          600: '#0050e0',
          700: '#003db3',
          800: '#003494',
          900: '#1E3A5F',
          950: '#0f1f38',
        },
        // Orange accent for CTAs and highlights
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Teal secondary for supporting elements
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        slate: colors.slate,
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1', fontWeight: '800' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
