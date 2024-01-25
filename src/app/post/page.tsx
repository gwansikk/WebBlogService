import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineTimer } from 'react-icons/md';
import { TiPen } from 'react-icons/ti';

import Image from 'next/image';

import data from '../../mocks/data/post.json';

export default function Page() {
  const { image, category, title, description, date, time, writer } = data;

  return (
    <>
      <Image
        src={image}
        alt={title}
        width={672}
        height={448}
        priority
        className="w-full rounded-lg border border-zinc-800 object-cover"
      />
      <div className="my-10">
        <p className="text-sm">{category}</p>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="mt-2 flex items-center gap-1 text-sm text-gray-400">
          <CiCalendarDate />
          <span>{date}</span>
          <span>•</span>
          <MdOutlineTimer />
          <span>{time}분</span>
          <span>•</span>
          <TiPen />
          <span>{writer}</span>
        </div>
      </div>
    </>
  );
}
