import { PropsWithChildren } from 'react';

import Article from '@/src/components/Article/Article';
import Container from '@/src/components/Container/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function SubLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Article className="m-auto my-10 max-w-2xl">{children}</Article>
    </Container>
  );
}
