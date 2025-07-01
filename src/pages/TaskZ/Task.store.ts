import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { Task } from './Task';

interface State {
    tasks: Task[]
}
interface Action {
    createTask: (name: string, done: boolean) => void;
    deleteTask: (task: Task) => void;
    toggleTask: (task: Task) => void;
    updateTask: (task: Task) => void;
}

export const useTaskStore = create<State & Action>()(
    immer((set) => ({
        tasks: [
            { id: 1, name: "task 1", done: true },
            { id: 2, name: "task 2", done: true },
            { id: 3, name: "task 3", done: false },
            { id: 4, name: "task 4", done: false },
            { id: 5, name: "task 5", done: true },
        ],

        createTask: (name: string, done: boolean) => set(state => {
            const newTask = { id: Math.random(), name, done };
            state.tasks.push(newTask);
        }),
        deleteTask: (task: Task) => set(state => {
            state.tasks = state.tasks.filter(x => x.id !== task.id)
        }),
        toggleTask: (task: Task) => set(state => {
            const task2 = state.tasks.find(x => x.id === task.id)
            if (task2) {
                task2.done = !task2.done;
            }
        }),
        updateTask: (task: Task) => set(state => {
            const task2 = state.tasks.find(x => x.id === task.id)
            if (task2) {
                task2.name = task.name,
                    task2.done = task.done
            }
        }),
    }))
);
