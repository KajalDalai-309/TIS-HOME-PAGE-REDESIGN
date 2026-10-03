/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        crimson: { DEFAULT: '#b90124', dark: '#8d0021' },
        teal: '#60bab1',
        cream: '#f8f5f0',
        ink: '#262626',
        bg: token('bg'),
        fg: token('fg'),
        muted: token('muted'),
        card: token('card'),
        line: token('line'),
        accent: token('accent'),
        tealink: token('tealink'),
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
