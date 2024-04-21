import { cn } from '@utils/common';

import type { ParentProps } from '@type/props';

import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const PageLayout = ({ className, children }: ParentProps) => {
  return (
    <>
      <Nav />
      <main className={cn('container mt-14 justify-between py-5', className)}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
