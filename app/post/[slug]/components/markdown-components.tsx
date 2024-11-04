import { APP_THEME_SCREENS_MAX_WIDTH } from '@constants/environment';

import { Code } from 'bright';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...rest }) => (
    <h1
      id={children?.toString().replace(/ /g, '-').toLowerCase()}
      className="pb-2 pt-8 text-3xl font-semibold text-white"
      {...rest}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...rest }) => (
    <h2
      id={children?.toString().replace(/ /g, '-').toLowerCase()}
      className="pb-2 pt-4 text-2xl font-semibold text-white"
      {...rest}
    >
      {children}
    </h2>
  ),
  p: (props) => <p {...props} />,
  a: ({ children, ...rest }) => (
    <a
      className="text-zinc-400 underline underline-offset-4"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  ),
  img: (props) => {
    const imageURL = props.src?.replace('../public', '') as string;
    return (
      <Image
        width={APP_THEME_SCREENS_MAX_WIDTH}
        height={520}
        priority
        placeholder="blur"
        blurDataURL={imageURL}
        src={imageURL}
        alt={props.alt as string}
        className="max-h-[520px] w-full rounded-lg border border-zinc-800 object-cover object-left-top"
      />
    );
  },
  ul: (props) => (
    <ul className="list-inside list-disc leading-loose" {...props} />
  ),
  li: (props) => <li className="truncate" {...props} />,
  pre: (props) => <Code className="!my-1.5 !text-sm" {...props} />,
  code: (props) => (
    <span className="rounded bg-zinc-600/50 px-0.5 text-sm" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="!my-1.5 border-l-4 border-zinc-400 bg-zinc-800 py-0.5 pl-4"
      {...props}
    />
  ),
};
