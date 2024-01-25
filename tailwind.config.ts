import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '640px',
          md: '720px',
          lg: '820px',
          xl: '820px',
          '2xl': '820px',
        },
      },
      colors: {
        'wbs-white': '#ddddde',
        'wbs-black': '#111010',
        'wbs-gray': '#262626',
      },
    },
  },
  plugins: [],
};
export default config;
