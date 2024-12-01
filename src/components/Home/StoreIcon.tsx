import React from 'react';
import { ShoppingBagIcon, SparklesIcon, GiftIcon, TagIcon } from '@heroicons/react/24/outline';

type IconType = 'bag' | 'sparkles' | 'gift' | 'tag';

interface StoreIconProps {
  type: IconType;
  className?: string;
}

const StoreIcon: React.FC<StoreIconProps> = ({ type, className = "w-6 h-6" }) => {
  const icons = {
    bag: ShoppingBagIcon,
    sparkles: SparklesIcon,
    gift: GiftIcon,
    tag: TagIcon,
  };

  const Icon = icons[type];
  return <Icon className={className} />;
};

export default StoreIcon;