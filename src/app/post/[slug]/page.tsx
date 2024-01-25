import { getPost } from '@/src/lib/get-posts';
import { notFound } from 'next/navigation';

import { PostBody } from './components/post-body';

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  // notFound is a Next.js utility
  if (!post) return notFound();
  // Pass the post contents to MDX
  return <PostBody>{post.body}</PostBody>;
}
