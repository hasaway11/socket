import { create } from 'zustand';

const useWebSocketStore = create((set) => ({
  socket: null,
  setSocket: (newSocket) => set({ socket: newSocket }),
}));

export default useWebSocketStore;