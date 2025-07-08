import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type LoginRequest, type RegisterRequest } from "../../Api";
import { appApi } from "../../AppApi";
import type { RootState } from "../../store";

interface AuthStore {
    token: string;
    email: string;
    loading: boolean;
}

const initialState: AuthStore = {
    token: localStorage.getItem("token") || '', // default operator
    email: localStorage.getItem("email") ?? '', // nullish operator
    loading: false
}



export const loginAction = createAsyncThunk("auth/login", async (request: LoginRequest) => {
    const resp = await appApi.auth.login(request);
    return { token: resp.data.token, email: request.email };
})

export const registerAction = createAsyncThunk("auth/register", async (request: RegisterRequest) => {
    const resp = await appApi.auth.register(request);
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
        logout: (state) => {
            state.email = "";
            state.token = "";
            localStorage.setItem("token", '');
            localStorage.setItem("email", '');
        }
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
            localStorage.setItem("token", state.token);
            localStorage.setItem("email", state.email);

            //navigate /  ?
        });
        builder.addCase(loginAction.rejected, (state) => {
            state.loading = false;
            state.email = "";
            state.token = "";
        });


        builder.addCase(registerAction.pending, state => {
            state.loading = true;
        });
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.email = action.payload.email;
            state.token = action.payload.token;
            localStorage.setItem("token", state.token);
            localStorage.setItem("email", state.email);
        });
        builder.addCase(registerAction.rejected, (state) => {
            state.loading = false;
            state.email = "";
            state.token = "";
        });
    }
});


export const selectToken = (state: RootState) => state.auth.token
export const selectAuth = (state: RootState) => state.auth

export const { logout } = authSlice.actions;
export default authSlice.reducer;