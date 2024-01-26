import { PropsWithChildren } from 'react';

import Article from '@/src/components/Article/Article';
import Container from '@/src/components/Container/Container';

export default function SubLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Article>{children}</Article>
    </Container>
  );
}
