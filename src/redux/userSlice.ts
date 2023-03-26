import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResponse } from "../types";

// localstorage
const user = localStorage.getItem("user");


const initialState: UserResponse = user ? JSON.parse(user) : null;

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction) => {},
    },

    extraReducers: (builder) => {
        builder.addCase("login/fulfilled", (state, action) => {
            state = action?.payload;
            localStorage.setItem("user", JSON.stringify(state));
        });
    }
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
