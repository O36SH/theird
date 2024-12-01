import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChats } from '@/hooks/useChats';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const NewChat: React.FC = () => {
  const navigate = useNavigate();
  const { addChat } = useChats();
  const [search, setSearch] = useState('');

  const handleCreateChat = (userId: number) => {
    const newChat = {
      id: Date.now(),
      type: 'private',
      name: 'محادثة جديدة',
      participants: [{ id: userId, name: 'مستخدم جديد' }],
      unreadCount: 0,
    };

    addChat(newChat);
    navigate(`/chats/${newChat.id}`);
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">محادثة جديدة</h1>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث عن مستخدم..."
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
        />
      </div>

      <div className="space-y-4">
        {/* Mock user list */}
        {[1, 2, 3].map((userId) => (
          <div
            key={userId}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
          >
            <div>
              <h3 className="font-medium">مستخدم {userId}</h3>
              <p className="text-sm text-gray-500">user{userId}@example.com</p>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleCreateChat(userId)}
            >
              بدء محادثة
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewChat;