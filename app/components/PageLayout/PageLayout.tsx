import { PropsWithChildren } from 'react';

import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Nav />
      <main className="container mt-14 justify-between py-5">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
