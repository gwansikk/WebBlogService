import { APP_THEME_MAX_WIDTH } from '@constants/environment';

import { Code } from 'bright';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="!mt-10 text-3xl font-semibold text-white" {...props} />
  ),
  p: (props) => <p {...props} />,
  a: (props) => (
    <a
      className="text-zinc-400 underline underline-offset-4"
      target="_blank"
      {...props}
    />
  ),
  img: (props) => {
    const imageURL = props.src?.replace('../public', '') as string;
    return (
      <Image
        width={APP_THEME_MAX_WIDTH}
        height={APP_THEME_MAX_WIDTH}
        priority
        placeholder="blur"
        blurDataURL={imageURL}
        src={imageURL}
        alt={props.alt as string}
        className="w-full rounded-lg border border-zinc-800 object-cover"
      />
    );
  },
  ul: (props) => (
    <ul className="list-inside list-disc leading-loose" {...props} />
  ),
  li: (props) => <li className="truncate" {...props} />,
  pre: (props) => <Code className="!my-1.5 !text-sm" {...props} />,
  code: (props) => (
    <span
      className="rounded bg-zinc-800 px-1.5 text-sm text-red-400"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-zinc-400 bg-zinc-800 py-0.5 pl-4"
      {...props}
    />
  ),
};
