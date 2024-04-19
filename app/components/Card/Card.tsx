import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineTimer } from 'react-icons/md';

import { PATH_FINDER } from '@constants/path';

import { cn } from '@utils/common';

import Badge from '@components/Badge/Badge';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import type { ParentProps, PropsWithClassName } from '@type/props';

interface CardProps {
  to: string;
}

interface CardImageProps {
  src: string;
  alt: string;
}

interface CardInfoProps {
  tags: string[];
  title: string;
  description: string;
}

interface CardMetaProps {
  date: string;
  time: number;
  writer: string;
}

const Card = ({ className, children, to }: ParentProps<CardProps>) => {
  return (
    <Link
      scroll={false}
      href={PATH_FINDER.POST(to)}
      className={cn(
        'flex cursor-pointer flex-col justify-between gap-2 rounded-lg p-2 transition-colors hover:bg-zinc-900',
        className,
      )}
    >
      {children}
    </Link>
  );
};

const CardImage = ({
  className,
  src,
  alt,
}: PropsWithClassName<CardImageProps>) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={568}
      height={126}
      className={cn(
        'h-36 w-full rounded-lg border border-zinc-800 object-cover',
        className,
      )}
    />
  );
};

const CardInfo = ({
  className,
  tags,
  title,
  description,
}: PropsWithClassName<CardInfoProps>) => {
  return (
    <div className={cn('grow text-wbs-white/70', className)}>
      <div className="flex gap-2 text-xs">
        {tags.map((tag) => (
          <Badge key={tag}>{tag.toUpperCase()}</Badge>
        ))}
      </div>
      <div className="break-keep">
        <h3 className="line-clamp-2 text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

const CardMeta = ({
  className,
  date,
  time,
}: PropsWithClassName<CardMetaProps>) => {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-1 text-xs text-wbs-white/70',
        className,
      )}
    >
      <CiCalendarDate />
      <span>{dayjs(date).format('YYYY.MM.DD')}</span>
      <span>•</span>
      <MdOutlineTimer />
      <span>{time}분</span>
    </div>
  );
};

CardImage.displayName = 'CardImage';
CardInfo.displayName = 'CardInfo';
CardMeta.displayName = 'CardMeta';

Card.Image = CardImage;
Card.Info = CardInfo;
Card.Meta = CardMeta;

export default Card;
