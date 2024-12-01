import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Room } from '../types';
import RoomCard from '../components/Rooms/RoomCard';
import { PlusIcon } from '@heroicons/react/24/outline';

const Rooms: React.FC = () => {
  const navigate = useNavigate();
  const currentUserId = 123456; // Replace with actual user ID

  const [rooms] = useState<Room[]>([
    {
      id: 1,
      name: 'غرفة التقنية',
      description: 'نقاشات حول أحدث التقنيات والتطورات التكنولوجية',
      members: 150,
      isActive: true,
      createdBy: currentUserId,
      createdAt: '2024/03/15',
    },
    {
      id: 2,
      name: 'غرفة الرياضة',
      description: 'مناقشات رياضية وتحليلات المباريات',
      members: 89,
      isActive: true,
      createdBy: 789012,
      createdAt: '2024/03/14',
    },
    {
      id: 3,
      name: 'غرفة الأدب',
      description: 'نقاشات أدبية وتحليل الكتب',
      members: 45,
      isActive: true,
      createdBy: currentUserId,
      createdAt: '2024/03/13',
    },
    {
      id: 4,
      name: 'غرفة الفن',
      description: 'مناقشات فنية وعرض الأعمال الإبداعية',
      members: 67,
      isActive: true,
      createdBy: 345678,
      createdAt: '2024/03/12',
    },
  ]);

  const createdRooms = rooms.filter(room => room.createdBy === currentUserId);
  const joinedRooms = rooms.filter(room => room.createdBy !== currentUserId && room.isActive);

  const handleCreateRoom = () => {
    navigate('/rooms/create');
  };

  const handleJoinRoom = (roomId: number) => {
    console.log('Joining room:', roomId);
  };

  const handleLeaveRoom = (roomId: number) => {
    console.log('Leaving room:', roomId);
  };

  const handleManageRoom = (roomId: number) => {
    navigate(`/rooms/${roomId}/manage`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">الغرف</h1>
        <button
          onClick={handleCreateRoom}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
        >
          <PlusIcon className="w-5 h-5 ml-2" />
          إنشاء غرفة جديدة
        </button>
      </div>

      {/* Created Rooms Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
          الغرف التي أنشأتها
        </h2>
        <div className="space-y-4">
          {createdRooms.length > 0 ? (
            createdRooms.map(room => (
              <RoomCard
                key={room.id}
                room={room}
                onManage={() => handleManageRoom(room.id)}
              />
            ))
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
              لم تقم بإنشاء أي غرف بعد
            </div>
          )}
        </div>
      </div>

      {/* Joined Rooms Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
          الغرف المنضم إليها
        </h2>
        <div className="space-y-4">
          {joinedRooms.length > 0 ? (
            joinedRooms.map(room => (
              <RoomCard
                key={room.id}
                room={room}
                onLeave={() => handleLeaveRoom(room.id)}
              />
            ))
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
              لم تنضم إلى أي غرف بعد
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;