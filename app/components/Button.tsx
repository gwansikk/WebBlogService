import React, { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@utils/common';

interface ButtonProps extends ComponentPropsWithRef<'button'> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg p-1.5 transition-colors hover:bg-wbs-white/10',
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export default Button;
