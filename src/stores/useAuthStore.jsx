import { create } from 'zustand';
import { getUsername } from '../utils/authApi';

const useAuthStore = create((set, get) => ({
  username: undefined,

  checkAuth: async () => {
    try {
      const res = await getUsername();
      set(state=>({...state, username:res.data.username }));
    } catch (err) {
      if(err.status!==409)
        console.log(err);
      set(state=>({...state, username: null }));
    }
  },

  setUsername: (param) => set(state=>({...state, username: param })),

  resetUsername: () => set(state=>({...state, username: null }))
}));

export default useAuthStore;