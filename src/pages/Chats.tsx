import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChats } from '@/hooks/useChats';
import ChatList from '@/components/chat/ChatList';
import Button from '@/components/ui/Button';
import { PlusIcon } from '@heroicons/react/24/outline';

const Chats: React.FC = () => {
  const navigate = useNavigate();
  const { chats, setActiveChat } = useChats();

  const handleChatSelect = (chat: Chat) => {
    setActiveChat(chat);
    navigate(`/chats/${chat.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">المحادثات</h1>
        <Button
          onClick={() => navigate('/chats/new')}
          size="sm"
        >
          <PlusIcon className="h-5 w-5 ml-2" />
          محادثة جديدة
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {chats.length > 0 ? (
          <ChatList
            chats={chats}
            onChatSelect={handleChatSelect}
          />
        ) : (
          <div className="p-8 text-center text-gray-500">
            لا توجد محادثات حالياً
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;