import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="rounded bg-wbs-white px-1 text-black">{children}</span>
  );
};

export default Badge;
