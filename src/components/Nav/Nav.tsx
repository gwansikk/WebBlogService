import { FaGithub } from 'react-icons/fa';
import { MdOutlineLightMode } from 'react-icons/md';

import { APP_NAME } from '@/src/constants/environment';
import { PATH } from '@/src/constants/path';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 h-14 w-full border-b border-zinc-800 text-sm text-white backdrop-blur">
      <div className="container m-auto flex h-full items-center justify-between px-6">
        <div className="grow space-x-6">
          <Link scroll={false} href={PATH.HOME}>
            {APP_NAME}
          </Link>
          <Link scroll={false} href={PATH.HOME}>
            HOME
          </Link>
          <Link scroll={false} href={PATH.ABOUT}>
            ABOUT
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/gwansikk/WebBlogService" target="_blank">
            <FaGithub className="h-5 w-5 text-zinc-300 hover:text-white" />
          </a>
          <MdOutlineLightMode className="h-5 w-5 cursor-pointer text-zinc-300 hover:text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
