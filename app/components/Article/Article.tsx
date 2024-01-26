import classNames from 'classnames';

import type { ParentProps } from '@type/props';

const Article = ({ className, children }: ParentProps) => {
  return (
    <article className={classNames('m-auto my-5 max-w-2xl', className)}>
      {children}
    </article>
  );
};

export default Article;
