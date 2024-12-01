import React from 'react';
import { Room } from '../../types';
import { UserGroupIcon } from '@heroicons/react/24/outline';

interface RoomCardProps {
  room: Room;
  onJoin?: () => void;
  onLeave?: () => void;
  onManage?: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onJoin, onLeave, onManage }) => {
  const isCreator = room.createdBy === 123456; // Replace with actual user ID

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="relative flex-shrink-0">
          {room.avatar ? (
            <img
              src={room.avatar}
              alt={room.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
              <UserGroupIcon className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{room.name}</h3>
              {room.description && (
                <p className="text-gray-600 text-sm mt-1">{room.description}</p>
              )}
            </div>
            <span className="text-sm text-gray-500">{room.members} عضو</span>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">
              تم الإنشاء: {room.createdAt}
            </span>
            <div className="space-x-2">
              {isCreator ? (
                <button
                  onClick={onManage}
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  إدارة
                </button>
              ) : room.isActive ? (
                <button
                  onClick={onLeave}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                >
                  مغادرة
                </button>
              ) : (
                <button
                  onClick={onJoin}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  انضمام
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;