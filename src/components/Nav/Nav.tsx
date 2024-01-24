'use client';

import { FaGithub } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa6';

import { PATH } from '@/src/constants/path';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkerProps {
  href: string;
  path: string;
  children: string;
}

const Linker = ({ href, path, children }: LinkerProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        'hover:text-white',
        path === href ? 'text-white' : 'text-zinc-300',
      )}
    >
      {children}
    </Link>
  );
};

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      className={classNames(
        'fixed left-0 top-0 z-50 h-14 w-full border-zinc-800 text-sm text-white backdrop-blur',
      )}
    >
      <div className="container m-auto flex h-full items-center justify-between px-6">
        <div className="grow space-x-4">
          <Link href={PATH.HOME} className="mr-2">
            🧩 WebBlogService
          </Link>
          <Linker href={PATH.HOME} path={pathname}>
            HOME
          </Linker>
          <Linker href={PATH.POST} path={pathname}>
            POST
          </Linker>
          <Linker href={PATH.ABOUT} path={pathname}>
            ABOUT
          </Linker>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/gwansikk/WebBlogService">
            <FaGithub className="h-5 w-5 text-zinc-300 hover:text-purple-500" />
          </a>
          <FaRegLightbulb className="h-5 w-5 cursor-pointer text-zinc-300 hover:text-yellow-400" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
