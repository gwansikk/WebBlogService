export const PATH = {
  HOME: '/',
  POST: '/post',
  TAGS: '/tags',
  ABOUT: '/about',
} as const;

export const PATH_FINDER = {
  POST: (slug: string) => `/post/${slug.replace(/ /g, '-')}`,
} as const;
