import React from 'react';
import { ArrowRightIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';

interface ChatHeaderProps {
  title: string;
  subtitle?: string;
  avatar?: string;
  onBack?: () => void;
  onMenuClick?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  subtitle,
  avatar,
  onBack,
  onMenuClick,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b bg-white">
      <div className="flex items-center space-x-3">
        {onBack && (
          <Button
            variant="secondary"
            size="sm"
            onClick={onBack}
          >
            <ArrowRightIcon className="h-5 w-5" />
          </Button>
        )}
        
        <Avatar
          src={avatar}
          alt={title}
          size="md"
          fallback={title}
        />
        
        <div>
          <h2 className="font-semibold">{title}</h2>
          {subtitle && (
            <p className="text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>

      {onMenuClick && (
        <Button
          variant="secondary"
          size="sm"
          onClick={onMenuClick}
        >
          <EllipsisVerticalIcon className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default ChatHeader;