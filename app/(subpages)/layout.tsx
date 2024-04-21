import { PropsWithChildren } from 'react';

import PageLayout from '@components/PageLayout/PageLayout';

export default function SubLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <PageLayout>
      <article className="space-y-1.5 break-keep leading-relaxed">
        {children}
      </article>
    </PageLayout>
  );
}
