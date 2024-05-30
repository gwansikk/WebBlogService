import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineTimer } from 'react-icons/md';

import { APP_THEME_SCREENS_MAX_WIDTH } from '@constants/environment';

import { formatDate } from '@utils/date';

import Badge from '@components/Badge/Badge';

import Image from 'next/image';

import type { Post } from '@type/post';

interface PostHeadProps extends Omit<Post, 'body'> {
  time: number;
}

const PostHead = ({
  title,
  date,
  tags,
  thumbnail,
  description,
  time,
}: PostHeadProps) => {
  return (
    <header className="space-y-4">
      <Image
        src={thumbnail}
        alt={title}
        width={APP_THEME_SCREENS_MAX_WIDTH}
        height={520}
        placeholder="blur"
        blurDataURL={thumbnail}
        priority
        className="h-[520px] w-full rounded-lg border border-zinc-800 object-cover"
      />
      <div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag.toUpperCase()}</Badge>
          ))}
        </div>
        <h1 className="break-keep text-4xl font-bold leading-relaxed text-white">
          {title}
        </h1>
        <p>{description}</p>
        <div className="mt-2 flex items-center gap-1 text-sm text-gray-400">
          <CiCalendarDate />
          <time dateTime={date.toISOString()}>{formatDate(date)}</time>
          <span>•</span>
          <MdOutlineTimer />
          <span>{time}분</span>
        </div>
      </div>
    </header>
  );
};

export default PostHead;
