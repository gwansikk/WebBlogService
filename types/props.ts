import { ReactNode } from 'react';

// 부모 컴포넌트의 props 타입을 정의할 때 사용
// ex) type ParentProps = PropsWithChildren<{}>
export type ParentProps<P = unknown> = P & {
  className?: string;
  children: ReactNode;
};

// className을 포함한 props 타입을 정의할 때 사용
// ex) type Props = PropsWithClassName<{}>
export type PropsWithClassName<P = unknown> = P & { className?: string };
