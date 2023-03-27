import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResponse } from "../types";

const user = localStorage.getItem("user");

const initialState: UserResponse =
    user && user !== "undefined" ? JSON.parse(user) : null;

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: UserResponse, action: PayloadAction) => {
            state = action.payload as any; // let it of type any only for now
            localStorage.setItem("user", JSON.stringify(state));
            return state;
        },
        logout: (state: any) => {
            state = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return state;
        },
    },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
