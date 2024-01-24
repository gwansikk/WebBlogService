import { ReactNode } from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineTimer } from 'react-icons/md';
import { TiPen } from 'react-icons/ti';

import type { PropsWithClassName } from '@/src/types/props';
import classNames from 'classnames';
import Image from 'next/image';

interface CardProps {
  children: ReactNode;
}

interface CardImageProps {
  src: string;
  alt: string;
}

interface CardInfoProps {
  category: string;
  title: string;
  description: string;
}

interface CardMetaProps {
  date: string;
  time: number;
  writer: string;
}

const Card = ({ className, children }: PropsWithClassName<CardProps>) => {
  return (
    <div
      className={classNames(
        'cursor-pointer space-y-2 rounded-lg p-2 transition-colors hover:bg-zinc-900',
        className,
      )}
    >
      {children}
    </div>
  );
};

Card.Image = ({ className, src, alt }: PropsWithClassName<CardImageProps>) => {
  return (
    <div
      className={classNames(
        'h-36 w-full rounded-lg border border-zinc-800',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={640}
        height={480}
        className="h-full rounded-lg object-cover"
      />
    </div>
  );
};

Card.Info = ({
  className,
  category,
  title,
  description,
}: PropsWithClassName<CardInfoProps>) => {
  return (
    <div
      className={classNames(
        'flex flex-col justify-between text-gray-400',
        className,
      )}
    >
      <p className="text-xs">{category}</p>
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
      <span>{date}</span>
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
