import getPosts, { getPost } from '@/src/lib/get-posts';
import { notFound } from 'next/navigation';

import { PostBody } from './components/post-body';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.title.replace(/\s/g, '-') }));
}

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  // 게시글을 못찾을 경우 notFound
  if (!post) return notFound();

  return <PostBody>{post?.body}</PostBody>;
}
