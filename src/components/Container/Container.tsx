import { PropsWithChildren } from 'react';

import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Nav />
      <div className="min-h-dvh w-full bg-wbs-black">
        <main className="container m-auto px-6 py-8 text-wbs-white sm:pt-20">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Container;
