import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineTimer } from 'react-icons/md';
import { TiPen } from 'react-icons/ti';

import { PATH_FINDER } from '@/src/constants/path';
import type { Props, PropsWithClassName } from '@/src/types/props';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

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

const Card = ({ className, children, to }: Props<CardProps>) => {
  return (
    <Link
      href={PATH_FINDER.POST(to)}
      className={classNames(
        'flex cursor-pointer flex-col justify-between gap-2 rounded-lg p-2 transition-colors hover:bg-zinc-900',
        className,
      )}
    >
      {children}
    </Link>
  );
};

Card.Image = ({ className, src, alt }: PropsWithClassName<CardImageProps>) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={568}
      height={126}
      className={classNames(
        'h-36 w-full rounded-lg border border-zinc-800 object-cover',
        className,
      )}
    />
  );
};

Card.Info = ({
  className,
  tags,
  title,
  description,
}: PropsWithClassName<CardInfoProps>) => {
  return (
    <div className={classNames('grow text-gray-400', className)}>
      <p className="text-xs">{tags.join(', ')}</p>
      <div className="break-keep">
        <h3 className="line-clamp-2 text-lg font-bold text-gray-200">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

Card.Meta = ({
  className,
  date,
  time,
  writer,
}: PropsWithClassName<CardMetaProps>) => {
  return (
    <div
      className={classNames(
        'flex items-center gap-1 text-xs text-gray-400',
        className,
      )}
    >
      <CiCalendarDate />
      <span>{dayjs(date).format('YYYY.MM.DD')}</span>
      <span>•</span>
      <MdOutlineTimer />
      <span>{time}분</span>
      <span>•</span>
      <TiPen />
      <span>{writer}</span>
    </div>
  );
};

export default Card;
