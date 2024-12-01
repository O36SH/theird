import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useChats } from '@/hooks/useChats';
import { useMessages } from '@/hooks/useMessages';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatInput from '@/components/chat/ChatInput';

const ChatRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { activeChat, setActiveChat } = useChats();
  const { messages, addMessage } = useMessages();

  useEffect(() => {
    // Load chat data
    if (id && !activeChat) {
      // In a real app, fetch chat data from API
      setActiveChat({
        id: parseInt(id),
        type: 'private',
        name: 'محادثة تجريبية',
        participants: [],
        unreadCount: 0,
      });
    }
  }, [id, activeChat, setActiveChat]);

  const handleBack = () => {
    navigate('/chats');
  };

  const handleSend = (content: string) => {
    if (!activeChat) return;

    const newMessage = {
      id: Date.now(),
      content,
      senderId: -1, // Current user ID
      timestamp: new Date().toISOString(),
      read: false,
    };

    addMessage(activeChat.id, newMessage);
  };

  if (!activeChat) {
    return <div>جاري التحميل...</div>;
  }

  const chatMessages = messages[activeChat.id] || [];

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader
        title={activeChat.name}
        subtitle={activeChat.type === 'room' ? `${activeChat.participants.length} مشارك` : undefined}
        avatar={activeChat.participants[0]?.avatar}
        onBack={handleBack}
      />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isOwn={message.senderId === -1}
            showAvatar={true}
            userAvatar={activeChat.participants.find(p => p.id === message.senderId)?.avatar}
            userName={activeChat.participants.find(p => p.id === message.senderId)?.name}
          />
        ))}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatRoom;