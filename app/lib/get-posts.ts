import { cache } from 'react';

import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

import { Post } from '@type/post';

import { APP_EXT, APP_PATH } from '@constants/environment';

export const getPosts = cache(async () => {
  // process.cwd()는 vercel에서는 /var/task, 로컬에서는 프로젝트 경로
  // https://vercel.com/guides/loading-static-file-nextjs-api-route
  const posts = await fs.readdir(path.join(process.cwd(), APP_PATH));

  const data = await Promise.all(
    posts
      .filter((file) => APP_EXT.includes(path.extname(file) as any))
      .map(async (file) => {
        const filePath = `${APP_PATH}/${file}`;
        const postContent = await fs.readFile(
          path.join(process.cwd(), filePath),
          'utf8',
        );
        const { data, content } = matter(postContent);
        // private 게시글은 null로 처리합니다. 미지정시 public으로 간주됩니다.
        if (data.private === true) {
          return null;
        }

        return { ...data, body: content } as Post;
      }),
  );

  // private 게시글 제외합니다.
  const publicData = data.filter((post) => post !== null) as Post[];
  // 날짜 순으로 정렬 후 반환합니다.
  return publicData.sort((a, b) => (a.date < b.date ? 1 : -1));
});

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  const findSlug = decodeURIComponent(slug.replace(/-/g, ' '));

  return posts.find((post) => post?.title === findSlug) || null;
}

export default getPosts;
