import { cn } from '@utils/common';

import type { ParentProps } from '@type/props';

const Article = ({ className, children }: ParentProps) => {
  return (
    <article className={cn('m-auto my-5 max-w-2xl', className)}>
      {children}
    </article>
  );
};

export default Article;
