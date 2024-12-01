import { create } from 'zustand';
import type { User } from '@/types';

interface FriendsState {
  friends: User[];
  onlineFriends: User[];
  offlineFriends: User[];
  addFriend: (friend: User) => void;
  removeFriend: (friendId: number) => void;
  updateFriendStatus: (friendId: number, isOnline: boolean) => void;
}

export const useFriends = create<FriendsState>((set) => ({
  friends: [],
  onlineFriends: [],
  offlineFriends: [],
  addFriend: (friend) =>
    set((state) => ({
      friends: [...state.friends, friend],
      onlineFriends: friend.status === 'online'
        ? [...state.onlineFriends, friend]
        : state.onlineFriends,
      offlineFriends: friend.status === 'offline'
        ? [...state.offlineFriends, friend]
        : state.offlineFriends,
    })),
  removeFriend: (friendId) =>
    set((state) => ({
      friends: state.friends.filter((f) => f.id !== friendId),
      onlineFriends: state.onlineFriends.filter((f) => f.id !== friendId),
      offlineFriends: state.offlineFriends.filter((f) => f.id !== friendId),
    })),
  updateFriendStatus: (friendId, isOnline) =>
    set((state) => {
      const friend = state.friends.find((f) => f.id === friendId);
      if (!friend) return state;

      const updatedFriend = { ...friend, status: isOnline ? 'online' : 'offline' };

      return {
        friends: state.friends.map((f) =>
          f.id === friendId ? updatedFriend : f
        ),
        onlineFriends: isOnline
          ? [...state.onlineFriends.filter((f) => f.id !== friendId), updatedFriend]
          : state.onlineFriends.filter((f) => f.id !== friendId),
        offlineFriends: !isOnline
          ? [...state.offlineFriends.filter((f) => f.id !== friendId), updatedFriend]
          : state.offlineFriends.filter((f) => f.id !== friendId),
      };
    }),
}));