import { cn } from '@utils/common';

import type { ParentProps } from '@type/props';

import Footer from './Footer';
import Nav from './Nav';

const PageLayout = ({ className, children }: ParentProps) => {
  return (
    <>
      <Nav />
      <div className="grow">
        <main className={cn('container mt-14 h-full py-5', className)}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
