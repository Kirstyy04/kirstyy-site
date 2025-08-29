import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pastel-lavender': '#B0A6F0',
        'pastel-pink': '#F0A6CA',
        'pastel-blue': '#A6D0F0',
        'pastel-green': '#A6F0C0',
        'pastel-yellow': '#F0E6A6',
        'pastel-50': '#FDFDFD',
      },
    },
  },
  plugins: [],
};

export default config;