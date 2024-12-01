import React from 'react';
import { Chat } from '../../types';
import Badge from '../UI/Badge';
import { UserGroupIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface ChatListItemProps {
  chat: Chat;
  onClick: (id: number) => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chat, onClick }) => {
  return (
    <div
      onClick={() => onClick(chat.id)}
      className="p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer relative flex items-center space-x-4"
    >
      <div className="relative">
        {chat.avatar ? (
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            {chat.type === 'room' ? (
              <UserGroupIcon className="w-6 h-6 text-gray-400" />
            ) : (
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-400" />
            )}
          </div>
        )}
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{chat.name}</h3>
          <span className="text-sm text-gray-500">{chat.time}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm mt-1 truncate">{chat.lastMessage}</p>
          {chat.type === 'room' && chat.participants && (
            <span className="text-xs text-gray-500">{chat.participants} مشارك</span>
          )}
        </div>
      </div>

      {chat.unreadCount && <Badge count={chat.unreadCount} />}
    </div>
  );
};

export default ChatListItem;