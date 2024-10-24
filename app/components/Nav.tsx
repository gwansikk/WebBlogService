import { APP_ICON, APP_NAME } from '@constants/environment';
import { PATH } from '@constants/path';

import LinkButton from '@components/LinkButton';

const Nav = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-14 w-full items-center border-zinc-800 backdrop-blur">
      <div className="container flex justify-between gap-10 text-sm">
        <LinkButton href={PATH.HOME} className="px-2">
          {APP_ICON}
        </LinkButton>
        <div className="flex grow items-center gap-6">
          <LinkButton href={PATH.HOME}>{APP_NAME}</LinkButton>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
