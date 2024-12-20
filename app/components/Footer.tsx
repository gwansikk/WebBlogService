import { FaGithub } from 'react-icons/fa';

import { APP_NAME, APP_SOCIAL_LINK } from '@constants/environment';

import LinkButton from '@components/LinkButton';

export default function Footer() {
  return (
    <footer className="container flex justify-between py-4 text-sm">
      <ul className="flex items-center gap-1">
        <li>© {APP_NAME}.</li>
        <li>•</li>
        <li>Powered By WebBlogService,</li>
        <li>Next.js</li>
      </ul>
      <div className="flex items-center gap-2">
        {APP_SOCIAL_LINK?.map(({ icon, link }) => (
          <LinkButton key={link} href={link} target="_blank">
            <FaGithub className="size-5" />
          </LinkButton>
        ))}
      </div>
    </footer>
  );
}
