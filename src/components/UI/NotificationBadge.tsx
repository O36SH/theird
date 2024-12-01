import React from 'react';
import { cn } from '@/utils/cn';

interface NotificationBadgeProps {
  count: number;
  className?: string;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count, className }) => {
  if (count === 0) return null;

  return (
    <span
      className={cn(
        'absolute -top-1 -right-1 flex items-center justify-center',
        'min-w-[1.25rem] h-5 px-1 rounded-full',
        'bg-red-500 text-white text-xs font-medium',
        className
      )}
    >
      {count > 99 ? '99+' : count}
    </span>
  );
};

export default NotificationBadge;