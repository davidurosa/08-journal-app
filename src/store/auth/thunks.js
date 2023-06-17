import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, sintInWithGoogle } from "../../firebase/providers";
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


export const startCreatingUserWithEmailPassword = ({email, password,displayName}) =>{

    return async(dispatch) =>{
        dispatch(chekingCredentials());

       const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({email, password,displayName});

       if(!ok) return dispatch(logout({errorMessage}));

       console.log(displayName);
       dispatch(login({email,uid,photoURL,displayName} ));

    }

}



export const startLoginWithEmailPassword = ( {email, password}) =>{

return async (dispatch)=>{
    dispatch(chekingCredentials());


    const resp = await loginWithEmailPassword({email,password})
    const {ok,uid,photoURL,errorMessage} = resp;
    console.log(resp);

    if(!ok) return dispatch(logout(resp));

       dispatch(login(resp ));
}

}




export const startLogout =()=>{
    return async(dispatch)=>{
      await logoutFirebase()

      dispatch(logout());
    }
}