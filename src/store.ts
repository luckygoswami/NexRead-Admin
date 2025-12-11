import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface TokenStore {
  token: string;
  setToken: (data: string) => void;
}

export const useTokenStore = create<TokenStore>()(
  devtools(
    persist(
      (set) => ({
        token: '',
        setToken: (data: string) => set(() => ({ token: data })),
      }),
      { name: 'auth-token' }
    )
  )
);
