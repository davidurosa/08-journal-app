import {
    createSlice
} from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'cheking',//no-authenticated ,cheking
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {

        login:(state,{payload})=>{

            state.status= 'authenticated';//no-authenticated ,cheking
            state.uid = payload.uid;
             state.email = payload.email;
             state.displayName = payload.displayName;
             state.photoURL = payload.photoURL;
             state.errorMessage = null;

        },

        logout:(state,{payload})=>{
            state.status= 'no-authenticated';//no-authenticated ,cheking
           state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },

        chekingCredentials:(state)=>{
            state.status= 'cheking'

        }


    }

});
// Action creators are generated for each case reducer function
export const {
    login,
    logout,
    chekingCredentials
} = authSlice.actions;