import { cache } from 'react';

import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

import type { Post } from '../types/post';

export const getPosts = cache(async () => {
  const posts = await fs.readdir(path.join('posts'));

  console.log(posts);

  const data = await Promise.all(
    posts
      .filter(
        (file) => path.extname(file) === '.mdx' || path.extname(file) === '.md',
      )
      .map(async (file) => {
        const filePath = `posts/${file}`;
        const postContent = await fs.readFile(path.join(filePath), 'utf8');
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      }),
  );

  return data.filter((post) => post !== null) as Post[];
});

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  const findSlug = decodeURIComponent(slug.replace(/-/g, ' '));

  return posts.find((post) => post?.title === findSlug) || null;
}

export default getPosts;
