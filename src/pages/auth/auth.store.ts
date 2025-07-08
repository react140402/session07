import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { appApi } from "../../AppApi";
import type { LoginRequest, RegisterRequest } from '../../Api';

interface AuthStore {
    token: string;
    email: string;
    loading: boolean;

    login: (data: LoginRequest) => Promise<void>;
    register: (data: RegisterRequest) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        immer((set) => ({
            token: '',
            email: '',
            loading: false,

            login: async (data: LoginRequest) => set(async (state) => {
                state.loading = true;
                try {
                    const resp = await appApi.auth.login(data);
                    state.email = data.email;
                    state.token = resp.data.token;
                } catch {
                    state.email = '';
                    state.token = '';
                }
                state.loading = false;
            }),
            register: async (data: RegisterRequest) => set(async (state) => {
                state.loading = true;
                try {
                    const resp = await appApi.auth.register(data);
                    state.email = data.email;
                    state.token = resp.data.token;
                } catch {
                    state.email = '';
                    state.token = '';
                }
                state.loading = false;
            }),
            logout: () => set(state => {
                state.email = "";
                state.token = "";
                state.loading = false;
            })
        })),
        { name: 'auth-store' }
    )
);