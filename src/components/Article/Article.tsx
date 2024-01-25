import React from 'react';

import { Props } from '@/src/types/props';
import classNames from 'classnames';

const Article = ({ className, children }: Props) => {
  return (
    <article className={classNames('m-auto my-5 max-w-2xl', className)}>
      {children}
    </article>
  );
};

export default Article;
