import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: "english",
    mode: "light"
}

const appSlice = createSlice({
    name : 'app',
    initialState,
    reducers: {
        TOGGLE_THEME : (state, action)=>{
            state.mode = state.mode=="light" ? "dark" : "light";
        },
        CHANGE_LANGUAGE : (state, action)=>{
            state.language = action.payload;
        }
    }
})

export const { TOGGLE_THEME, CHANGE_LANGUAGE } = appSlice.actions;
export default appSlice.reducer;