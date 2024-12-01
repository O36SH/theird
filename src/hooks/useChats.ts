import { create } from 'zustand';
import type { Chat, Message } from '@/types';

interface ChatsState {
  chats: Chat[];
  activeChat: Chat | null;
  setActiveChat: (chat: Chat | null) => void;
  addChat: (chat: Chat) => void;
  updateLastMessage: (chatId: number, message: Message) => void;
  markAsRead: (chatId: number) => void;
}

export const useChats = create<ChatsState>((set) => ({
  chats: [],
  activeChat: null,
  setActiveChat: (chat) => set({ activeChat: chat }),
  addChat: (chat) =>
    set((state) => ({
      chats: [...state.chats, chat],
    })),
  updateLastMessage: (chatId, message) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              lastMessage: message,
              unreadCount: chat.unreadCount + 1,
            }
          : chat
      ),
    })),
  markAsRead: (chatId) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              unreadCount: 0,
            }
          : chat
      ),
    })),
}));