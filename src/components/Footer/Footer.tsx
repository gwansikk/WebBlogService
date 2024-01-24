import { FaRssSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-5 text-sm text-white">
      <div className="container m-auto flex justify-between px-6">
        <div className="space-x-1">
          <span>© WebBlogService.</span>
          <span>•</span>
          <span>Powered By WebBlogService</span>
        </div>
        <div>
          <FaRssSquare className="h-5 w-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
