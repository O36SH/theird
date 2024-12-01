import React from 'react';
import { cn } from '@/utils/cn';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fallback?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  className,
  fallback,
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const getFallbackInitial = () => {
    if (fallback) return fallback.charAt(0).toUpperCase();
    if (alt) return alt.charAt(0).toUpperCase();
    return '؟';
  };

  return (
    <div className={cn(
      'relative rounded-full overflow-hidden bg-gray-200',
      sizes[size],
      className
    )}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">
          {getFallbackInitial()}
        </div>
      )}
    </div>
  );
};

export default Avatar;