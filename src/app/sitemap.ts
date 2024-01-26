import path from 'path';

import getPosts from '@lib/get-posts';

import { APP_PATH, APP_SITE } from '@constants/environment';

export default async function sitemap() {
  const posts = await getPosts();
  const blogs = posts.map((post) => ({
    url: path.join(APP_SITE, APP_PATH, post.title.replace(/ /g, '-')),
  }));

  const routes = ['', '/about', '/post', '/'].map((route) => ({
    url: path.join(APP_SITE, route),
  }));

  return [...routes, ...blogs];
}
