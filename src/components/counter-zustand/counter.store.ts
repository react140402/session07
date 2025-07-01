import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface State {
    count: number;
    name: string
    color: string
}
interface Action {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    incrementByAmount: (amount: number) => void;
}

export const useCounterStore = create<State & Action>()(
    immer((set) => ({
        count: 0,
        name: 'test',
        color: 'red',

        increment: () => set(state => { state.count++ }),
        decrement: () => set(state => { state.count-- }),
        reset: () => set(state => { state.count = 0 }),
        incrementByAmount: (amount: number) => set(state => { state.count += amount }),
    }))
);
