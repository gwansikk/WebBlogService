import { APP_THEME_SCREENS_MAX_WIDTH } from '@constants/environment';
import { PATH_FINDER } from '@constants/path';

import { cn } from '@utils/common';

import Image from 'next/image';
import Link from 'next/link';

import type { ParentProps } from '@type/props';

interface BannerProps extends ParentProps {
  to: string;
  src: string;
  alt: string;
}

const Banner = ({ to, src, alt, className, children }: BannerProps) => {
  return (
    <Link
      scroll={false}
      href={PATH_FINDER.POST(to)}
      className={cn(
        'rounded-lg border-2 border-transparent bg-none p-2 transition duration-300 ease-in-out hover:scale-105 hover:border-wbs-primary',
        className,
      )}
    >
      <div className="relative flex h-60 items-center overflow-hidden rounded-lg shadow-2xl shadow-zinc-800/50">
        <Image
          src={src}
          alt={alt}
          width={APP_THEME_SCREENS_MAX_WIDTH}
          height={240}
          priority
          placeholder="blur"
          blurDataURL={src}
          className="h-full w-full rounded-lg border border-zinc-800 object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 h-full w-full rounded-lg bg-gradient-to-t from-black/50 via-black/30" />
        <div className="pointer-events-none absolute bottom-0 whitespace-nowrap p-4 text-start">
          {children}
        </div>
      </div>
    </Link>
  );
};

export default Banner;
