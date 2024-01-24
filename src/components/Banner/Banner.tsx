import { ReactNode } from 'react';

import Image from 'next/image';

interface BannerProps {
  src: string;
  alt: string;
  children: ReactNode;
}

const Banner = ({ src, alt, children }: BannerProps) => {
  return (
    <div className="hidden cursor-pointer rounded-lg bg-none p-2 transition-colors hover:bg-zinc-900 sm:block">
      <div className="relative flex h-60 items-center overflow-hidden rounded-lg shadow-2xl shadow-zinc-800/50">
        <Image
          src={src}
          alt={alt}
          width={1270}
          height={720}
          className="h-full w-full rounded-lg border border-zinc-800 object-cover"
        />
        <div className="pointer-events-none absolute inset-0 h-full w-full rounded-lg bg-gradient-to-t from-black/50 via-black/30" />
        <div className="pointer-events-none absolute bottom-0 whitespace-nowrap p-4 text-start">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
