import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email : "",
    password : ""
}

const userSlice = createSlice({
    name : 'user',
    initialState : initialState,
    reducers : {
        "UPDATE_EMAIL" : (state, action)=>{
            state.email = action.payload;
        },
        "UPDATE_PASSWORD" : (state, action)=>{
            state.password = action.payload;
        }
    } 
})

export const { UPDATE_PASSWORD, UPDATE_EMAIL } = userSlice.actions;

export default userSlice.reducer;
