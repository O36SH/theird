import { create } from 'zustand';
import type { Message } from '@/types';

interface MessagesState {
  messages: Record<number, Message[]>;
  addMessage: (chatId: number, message: Message) => void;
  markAsRead: (chatId: number, messageId: number) => void;
}

export const useMessages = create<MessagesState>((set) => ({
  messages: {},
  addMessage: (chatId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [chatId]: [...(state.messages[chatId] || []), message],
      },
    })),
  markAsRead: (chatId, messageId) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [chatId]: state.messages[chatId]?.map((msg) =>
          msg.id === messageId ? { ...msg, read: true } : msg
        ),
      },
    })),
}));