import type { Config } from 'tailwindcss';

import wbsConfig from './wbs.config';

const screens = wbsConfig.theme.screens;
const theme = wbsConfig.theme.colors;

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
          lg: screens.maxWidth + 'px',
          xl: screens.maxWidth + 'px',
          '2xl': screens.maxWidth + 'px',
        },
      },
      colors: {
        'wbs-white': '#ddddde',
        'wbs-black': '#111010',
        'wbs-gray': '#262626',
        'wbs-primary': theme.primary,
      },
    },
  },
  plugins: [],
};
export default config;
