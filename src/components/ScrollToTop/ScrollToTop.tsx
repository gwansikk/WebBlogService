'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  // path가 변경되면 가장 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
