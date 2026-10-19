/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#08243D',
          deep: '#051829',
          light: '#0E365C',
          dark: '#04121F',
          muted: '#1E3D59',
        },
        ivory: {
          DEFAULT: '#FAF7F0',
          light: '#FDFBF7',
          dark: '#F3EDE2',
        },
        gold: {
          DEFAULT: '#C18A43',
          light: '#DFB774',
          dark: '#9E6D30',
          amber: '#B87B2E',
          shimmer: '#F3E5AB',
        },
        beige: {
          DEFAULT: '#E9DFD0',
          light: '#F4EFE6',
          dark: '#DBCBB7',
        },
        body: '#343B43',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(8, 36, 61, 0.08), 0 4px 6px -2px rgba(8, 36, 61, 0.04)',
        'luxury-hover': '0 20px 35px -5px rgba(193, 138, 67, 0.2), 0 8px 12px -3px rgba(8, 36, 61, 0.08)',
        'gold-glow': '0 0 25px rgba(193, 138, 67, 0.35)',
      }
    },
  },
  plugins: [],
};
