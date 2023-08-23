import { createSlice } from "@reduxjs/toolkit";

export let  authSlice = createSlice({
    name: 'auth',
    initialState : {stateAuth: true, name: 'Mohamed Magdy'},
    reducers: {
        login: (state, action) => {
            state.stateAuth = !state.stateAuth
        }
    }
})



export  let {login} = authSlice.actions;