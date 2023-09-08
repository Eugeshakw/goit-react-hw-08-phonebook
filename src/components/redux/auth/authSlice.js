import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: "user",
    initialState:{
        login: '',
        isLogIn: false,
       
    }, 
    reducers: {
        login(state, action) {
            state.login = action.payload
            state.isLogIn = true
        },
        logout(state) {
            state.login = ''
            state.isLogIn = false
        }
        
    },

}

    
) 


export const {login , isLogIn, logout} = userSlice.actions