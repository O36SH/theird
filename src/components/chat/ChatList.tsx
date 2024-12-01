import React from 'react';
import { Chat } from '@/types';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import { formatRelativeTime } from '@/utils/date';

interface ChatListProps {
  chats: Chat[];
  onChatSelect: (chat: Chat) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onChatSelect }) => {
  return (
    <div className="divide-y">
      {chats.map((chat) => (
        <button
          key={chat.id}
          className="w-full flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors text-right"
          onClick={() => onChatSelect(chat)}
        >
          <Avatar
            src={chat.participants[0]?.avatar}
            alt={chat.name}
            size="lg"
            fallback={chat.name}
          />
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold truncate">{chat.name}</h3>
              {chat.lastMessage && (
                <span className="text-xs text-gray-500">
                  {formatRelativeTime(chat.lastMessage.timestamp)}
                </span>
              )}
            </div>
            
            {chat.lastMessage && (
              <p className="text-sm text-gray-600 truncate">
                {chat.lastMessage.content}
              </p>
            )}
          </div>

          {chat.unreadCount > 0 && (
            <Badge variant="primary" size="sm">
              {chat.unreadCount}
            </Badge>
          )}
        </button>
      ))}
    </div>
  );
};

export default ChatList;