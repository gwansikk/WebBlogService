import { PropsWithChildren } from 'react';

import Article from '@/app/components/Article/Article';
import Container from '@/app/components/Container/Container';

export default function SubLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Article>{children}</Article>
    </Container>
  );
}
