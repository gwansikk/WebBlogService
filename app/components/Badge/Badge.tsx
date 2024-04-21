import React, { ComponentPropsWithRef } from 'react';

import { cn } from '@utils/common';

interface BadgeProps extends ComponentPropsWithRef<'span'> {}

const Badge = ({ className, children }: BadgeProps) => {
  return (
    <span
      className={cn(
        'text-nowrap rounded bg-wbs-white px-1 text-xs text-wbs-black',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
