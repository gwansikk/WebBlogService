export const PATH = {
  HOME: '/',
  POST: '/post',
} as const;

export const PATH_FINDER = {
  POST: (slug: string) => `/post/${slug.replace(/ /g, '-')}`,
} as const;
