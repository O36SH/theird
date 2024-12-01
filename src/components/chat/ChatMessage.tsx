import React from 'react';
import { cn } from '@/utils/cn';
import { Message } from '@/types';
import { formatMessageTime } from '@/utils/date';
import Avatar from '@/components/ui/Avatar';

interface ChatMessageProps {
  message: Message;
  isOwn: boolean;
  showAvatar?: boolean;
  userAvatar?: string;
  userName?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isOwn,
  showAvatar = true,
  userAvatar,
  userName,
}) => {
  return (
    <div className={cn(
      'flex items-end space-x-2',
      isOwn ? 'flex-row-reverse' : 'flex-row'
    )}>
      {showAvatar && (
        <Avatar
          src={userAvatar}
          alt={userName}
          size="sm"
          fallback={userName}
          className="flex-shrink-0"
        />
      )}
      
      <div className={cn(
        'max-w-[70%] rounded-lg px-4 py-2',
        isOwn ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'
      )}>
        <p className="text-sm">{message.content}</p>
        <span className={cn(
          'text-xs mt-1 block',
          isOwn ? 'text-blue-100' : 'text-gray-500'
        )}>
          {formatMessageTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;