import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineTimer } from 'react-icons/md';
import { TiPen } from 'react-icons/ti';

import Image from 'next/image';

export default function PostPage() {
  const mocks = {
    image:
      'https://images.unsplash.com/photo-1706045569094-3d7c366ba5ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    tags: ['tag1'],
    title: 'Title',
    description: 'Description',
    date: 'Date',
    time: 'Time',
    writer: 'Writer',
  };

  return (
    <>
      <Image
        src={mocks.image}
        alt={mocks.title}
        width={672}
        height={448}
        priority
        className="w-full rounded-lg border border-zinc-800 object-cover"
      />
      <div className="my-10">
        <p className="text-sm">{mocks.tags.join(', ')}</p>
        <h1 className="text-4xl font-bold">{mocks.title}</h1>
        <p>{mocks.description}</p>
        <div className="mt-2 flex items-center gap-1 text-sm text-gray-400">
          <CiCalendarDate />
          <span>{mocks.date}</span>
          <span>•</span>
          <MdOutlineTimer />
          <span>{mocks.time}</span>
          <span>•</span>
          <TiPen />
          <span>{mocks.writer}</span>
        </div>
      </div>
    </>
  );
}
