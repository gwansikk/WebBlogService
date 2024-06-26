import { PropsWithChildren } from 'react';

import PageLayout from '@components/PageLayout/PageLayout';

export default function SubLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <PageLayout>
      <article>{children}</article>
    </PageLayout>
  );
}
