import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineTimer } from 'react-icons/md';

import { PATH_FINDER } from '@constants/path';

import { cn } from '@utils/common';
import { formatDate } from '@utils/date';

import Image from 'next/image';
import Link from 'next/link';

import type { Post } from '@type/post';
import type { ParentProps, PropsWithClassName } from '@type/props';

interface CardProps extends ParentProps {
  to: string;
}

interface CardImageProps extends PropsWithClassName {
  src: string;
  alt: string;
}

interface CardInfoProps
  extends Pick<Post, 'title' | 'description'>,
    PropsWithClassName {}

interface CardMetaProps extends Pick<Post, 'date'> {
  time: number;
}

const Card = ({ className, children, to }: CardProps) => {
  return (
    <Link
      href={PATH_FINDER.POST(to)}
      className={cn(
        'flex flex-col justify-between gap-2 rounded-lg border-2 border-transparent p-2 transition duration-300 ease-in-out hover:-translate-y-2 hover:border-2 hover:border-wbs-primary',
        className,
      )}
    >
      {children}
    </Link>
  );
};

const CardImage = ({ className, src, alt }: CardImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={568}
      height={126}
      priority
      placeholder="blur"
      blurDataURL={src}
      className={cn(
        'h-36 w-full rounded-lg border border-zinc-800 object-cover object-left-top',
        className,
      )}
    />
  );
};

const CardInfo = ({ className, title, description }: CardInfoProps) => {
  return (
    <div className={cn('grow text-wbs-white/70', className)}>
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
      <time dateTime={date.toISOString()}>{formatDate(date)}</time>
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
