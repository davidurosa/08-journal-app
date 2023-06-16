import { sintInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (email,password) =>{
    return async (dispatch)=>{

        dispatch(chekingCredentials());
    }
}



export const startGoogleSingIn = () =>{
    return async (dispatch)=>{

        dispatch(chekingCredentials());
       const resp =  await sintInWithGoogle();

       if(!resp.ok) return dispatch(logout(resp.errorMessage))

        dispatch(login(resp));
       console.log({resp});
   }
}