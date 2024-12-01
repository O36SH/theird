import React from 'react';
import { User } from '../../types';

interface FriendListItemProps {
  friend: User;
  onChat: (id: number) => void;
}

const FriendListItem: React.FC<FriendListItemProps> = ({ friend, onChat }) => {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            {friend.avatar ? (
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-lg">
                {friend.name?.charAt(0)}
              </span>
            )}
          </div>
          <span 
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
              ${friend.status === 'متصل' ? 'bg-green-500' : 'bg-gray-400'}`}
          ></span>
        </div>
        <div>
          <h3 className="font-semibold">{friend.name}</h3>
          <span className={`text-sm ${friend.status === 'متصل' ? 'text-green-500' : 'text-gray-500'}`}>
            {friend.status}
          </span>
        </div>
      </div>
      <button 
        onClick={() => onChat(friend.id)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        محادثة
      </button>
    </div>
  );
};

export default FriendListItem;