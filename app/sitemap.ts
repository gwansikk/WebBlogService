import { APP_BASE_URL, APP_PATH } from '@constants/environment';

import getPosts from '@lib/get-posts';

import path from 'path';

export default async function sitemap() {
  const posts = await getPosts();
  const blogs = posts.map((post) => ({
    url: path.join(APP_BASE_URL, APP_PATH, post.title.replace(/ /g, '-')),
  }));
  const routes = ['', '/', '/about', '/post'].map((route) => ({
    url: path.join(APP_BASE_URL, route),
  }));

  return [...routes, ...blogs];
}
