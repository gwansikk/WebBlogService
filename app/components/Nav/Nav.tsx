import { MdOutlineLightMode } from 'react-icons/md';

import { APP_ICON } from '@constants/environment';
import { PATH } from '@constants/path';

import Button from '@components/Button/Button';
import LinkButton from '@components/LinkButton/LinkButton';

const Nav = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-14 w-full items-center border-zinc-800 backdrop-blur">
      <div className="container flex justify-between gap-10 text-sm">
        <LinkButton href={PATH.HOME} className="px-2">
          {APP_ICON}
        </LinkButton>
        <div className="flex grow items-center gap-6">
          <LinkButton href={PATH.HOME}>HOME</LinkButton>
          <LinkButton href={PATH.TAGS}>TAGS</LinkButton>
          <LinkButton href={PATH.ABOUT}>ABOUT</LinkButton>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <MdOutlineLightMode className="size-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
