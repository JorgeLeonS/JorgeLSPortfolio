import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#f0fdf4',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d', // for a slightly darker green
          800: '#166534', // even darker
          900: '#14532d', // darkest
      },

      'tag-green': '#14281F',
      'darkest-green': '#071406',

        background: "var(--background)",
        foreground: "var(--foreground)",



      },
    },
  },
  plugins: [],
} satisfies Config;
