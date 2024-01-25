import { FaRssSquare } from 'react-icons/fa';

import { APP_NAME } from '@/src/constants/environment';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-5 text-sm text-wbs-white">
      <div className="container m-auto flex justify-between px-6">
        <div className="space-x-1">
          <span>© {APP_NAME}.</span>
          <span>•</span>
          <span>Powered By WebBlogService</span>
        </div>
        <div>
          <FaRssSquare className="h-5 w-5 cursor-pointer hover:text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
