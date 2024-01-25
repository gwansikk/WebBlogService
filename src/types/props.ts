import { ReactNode } from 'react';

export type PropsWithClassName<P = unknown> = P & { className?: string };
export type Props<P = unknown> = P & {
  className?: string;
  children?: ReactNode;
};
