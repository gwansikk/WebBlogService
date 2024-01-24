import { Fragment, PropsWithChildren } from 'react';

import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Nav />
      <div className="min-h-dvh w-full bg-wbs-black">
        <main className="container m-auto px-6 py-16 text-white">
          {children}
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Container;
