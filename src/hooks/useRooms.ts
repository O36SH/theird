import { create } from 'zustand';
import type { Room } from '@/types';

interface RoomsState {
  rooms: Room[];
  activeRoom: Room | null;
  setActiveRoom: (room: Room | null) => void;
  addRoom: (room: Room) => void;
  joinRoom: (roomId: number) => void;
  leaveRoom: (roomId: number) => void;
}

export const useRooms = create<RoomsState>((set) => ({
  rooms: [],
  activeRoom: null,
  setActiveRoom: (room) => set({ activeRoom: room }),
  addRoom: (room) =>
    set((state) => ({
      rooms: [...state.rooms, room],
    })),
  joinRoom: (roomId) =>
    set((state) => ({
      rooms: state.rooms.map((room) =>
        room.id === roomId
          ? { ...room, memberCount: room.memberCount + 1 }
          : room
      ),
    })),
  leaveRoom: (roomId) =>
    set((state) => ({
      rooms: state.rooms.map((room) =>
        room.id === roomId
          ? { ...room, memberCount: room.memberCount - 1 }
          : room
      ),
    })),
}));