export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  status?: 'online' | 'offline';
}

export interface Message {
  id: number;
  content: string;
  senderId: number;
  timestamp: string;
  read: boolean;
}

export interface Chat {
  id: number;
  type: 'private' | 'room';
  name: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
}

export interface Room {
  id: number;
  name: string;
  description: string;
  memberCount: number;
  isPrivate: boolean;
  createdBy: number;
  createdAt: string;
}

export interface Post {
  id: number;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
  comments: number;
  images?: string[];
}