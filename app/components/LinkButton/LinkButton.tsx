import React from 'react';

import { cn } from '@utils/common';

import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const LinkButton = ({ className, children, ...rest }: LinkButtonProps) => {
  return (
    <Link
      className={cn(
        'rounded-lg p-1.5 transition-colors hover:bg-wbs-white/10',
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
