import React from 'react';
import { useNavigate } from 'react-router-dom';
import FriendListItem from '../components/Friends/FriendListItem';
import { User } from '../types';

const Friends: React.FC = () => {
  const navigate = useNavigate();
  const friends: User[] = [
    { id: 1, name: 'أحمد محمد', status: 'متصل' },
    { id: 2, name: 'سارة أحمد', status: 'غير متصل' },
    { id: 3, name: 'محمد علي', status: 'متصل' },
    { id: 4, name: 'فاطمة حسن', status: 'غير متصل' },
    { id: 5, name: 'عمر خالد', status: 'متصل' },
    { id: 6, name: 'نور محمد', status: 'غير متصل' },
  ];

  const onlineFriends = friends.filter(friend => friend.status === 'متصل');
  const offlineFriends = friends.filter(friend => friend.status === 'غير متصل');

  const handleChat = (friendId: number) => {
    navigate(`/chats/${friendId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">الأصدقاء</h1>
      
      {/* Online Friends Section */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-3 bg-green-50 border-b rounded-t-lg">
          <h2 className="text-lg font-semibold text-green-700 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            متصل ({onlineFriends.length})
          </h2>
        </div>
        <div className="divide-y">
          {onlineFriends.map((friend) => (
            <FriendListItem
              key={friend.id}
              friend={friend}
              onChat={handleChat}
            />
          ))}
          {onlineFriends.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              لا يوجد أصدقاء متصلين حالياً
            </div>
          )}
        </div>
      </div>

      {/* Offline Friends Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-3 bg-gray-50 border-b rounded-t-lg">
          <h2 className="text-lg font-semibold text-gray-700 flex items-center">
            <span className="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
            غير متصل ({offlineFriends.length})
          </h2>
        </div>
        <div className="divide-y">
          {offlineFriends.map((friend) => (
            <FriendListItem
              key={friend.id}
              friend={friend}
              onChat={handleChat}
            />
          ))}
          {offlineFriends.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              لا يوجد أصدقاء غير متصلين
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;