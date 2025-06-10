import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


// Define a type for the slice state
interface CounterState {
    value: number
    name: string
    color: string
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 10,
    name: "test",
    color: "red"
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            //immer
            state.value += 1;
            // state = {...state, value: state.value + 1}
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        changeNameAndColor: (state, action: PayloadAction<{ name: string, color: string }>) => {
            state.color = action.payload.color;
            state.name = action.payload.name;
        }
    },
})

export const { increment, decrement, incrementByAmount, reset, changeNameAndColor } = counterSlice.actions;

/*
    // increment() -> {action: "counter/increment", palyload: null}
*/
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer