import React from 'react';

import classNames from 'classnames';

interface ArticleProps {
  className?: string;
  children: React.ReactNode;
}

const Article = ({ className, children }: ArticleProps) => {
  return (
    <article className={classNames('m-auto my-5 max-w-2xl', className)}>
      {children}
    </article>
  );
};

export default Article;
