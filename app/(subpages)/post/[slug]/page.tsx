import getPosts, { getPost } from '@/app/lib/get-posts';
import { notFound } from 'next/navigation';

import { PostBody } from './components/post-body';
import PostFooter from './components/post-footer';
import PostHead from './components/post-head';

type PostPrams = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.title.replace(/\s/g, '-') }));
}

export default async function PostPage({ params }: Readonly<PostPrams>) {
  const post = await getPost(params.slug);
  // 게시글을 못찾을 경우 notFound
  if (!post) return notFound();

  return (
    <>
      <PostHead {...post} time={10} />
      <PostBody>{post?.body}</PostBody>
      <PostFooter />
    </>
  );
}
