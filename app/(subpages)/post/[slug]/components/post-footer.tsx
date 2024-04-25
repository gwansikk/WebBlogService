import React from 'react';

import { APP_CONTACT } from '@constants/environment';

const PostFooter = () => {
  return (
    <footer className="mt-9 text-center text-sm">
      <ul>
        <li>
          작성된 내용에 잘못된 점이 있거나 물어보고 싶은 점이 있으시면 언제든지
          연락주세요!
        </li>
        <li>
          <a
            href={`mailto:${APP_CONTACT}`}
            className="underline underline-offset-2"
          >
            {APP_CONTACT}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default PostFooter;
