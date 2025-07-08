import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type LoginRequest } from "../../Api";
import { appApi } from "../../AppApi";

interface AuthStore {
    token: string;
    email: string;
    loading: boolean;
}

const initialState: AuthStore = {
    token: '', //TODO  
    email: '',
    loading: false
}



export const loginAction = createAsyncThunk("auth/login", async (request: LoginRequest) => {
    const resp = await appApi.auth.login(request);
    return { token: resp.data.token, email: request.email };
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //side effect
        // login: (state, action) => {
        //     //const resp = await client.auth.login(values);
        // }
    },
    extraReducers: (builder) => {
        //Promise -> 1. pending, 2. fulfilled, 3.rejected

        builder.addCase(loginAction.pending, state => {
            state.loading = true;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.email = action.payload.email;
            state.token = action.payload.token;
        });
        builder.addCase(loginAction.rejected, (state) => {
            state.loading = false;
            state.email = "";
            state.token = "";
        });
    }
});


export default authSlice.reducer;