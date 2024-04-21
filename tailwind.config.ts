import type { Config } from 'tailwindcss';

import wbsConfig from './wbs.config';

const maxWidth = wbsConfig.theme.maxWidth;

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          sm: '640px',
          md: '720px',
          lg: maxWidth + 'px',
          xl: maxWidth + 'px',
          '2xl': maxWidth + 'px',
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
