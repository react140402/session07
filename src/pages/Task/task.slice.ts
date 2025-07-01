import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Task } from './Task';
import type { RootState } from '../../store';

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [
        { id: 1, name: "task 1", done: true },
        { id: 2, name: "task 2", done: true },
        { id: 3, name: "task 3", done: false },
        { id: 4, name: "task 4", done: false },
        { id: 5, name: "task 5", done: true },
    ]
}

//crud -> create / read / update / delete
//immer
export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        createTask: (state, action: PayloadAction<string>) => {
            //state is clone
            const newTask = { id: Math.random(), name: action.payload, done: false };
            state.tasks.push(newTask);
        },
        deleteTask: (state, action: PayloadAction<Task>) => {
            state.tasks = state.tasks.filter(x => x.id !== action.payload.id)
        },
        toggleTask: (state, action: PayloadAction<Task>) => {
            const task = state.tasks.find(x => x.id === action.payload.id)
            if (task) {
                task.done = !task.done;
            }
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            const task = state.tasks.find(x => x.id === action.payload.id)
            if (task) {
                task.name = action.payload.name,
                    task.done = action.payload.done
            }
        }

    }
});

export const { createTask, deleteTask, toggleTask, updateTask } = taskSlice.actions;
export const selectTasks = (state: RootState) => state.taskList.tasks

export default taskSlice.reducer