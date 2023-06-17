import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName:''
}


const formValidations ={

  email:[ (value) => value.includes('@'),'El correo debe tener un @'],
  password:[ (value) => value.length >= 6,'El password debe tener mas de 6 letras'],
  displayName:[ (value) => value.length >= 1,'El nombre es obligatorio']
}


export const RegisterPage = () => {

const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false)


const { status,errorMessage } = useSelector( state => state.auth );

const isCheackingAuthentication = useMemo(()=> status ==='cheaking',[status])


  const { email, password,displayName, onInputChange,formState,
   isFormValid,displayNameValid,emailValid,passwordValid} = useForm(formData,formValidations);

   

const onSubmit=(event)=>{

  event.preventDefault();
  setformSubmitted(true);

  if(!isFormValid) return;

  dispatch(startCreatingUserWithEmailPassword(formState));
}


  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              name="displayName"
              value={displayName}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              onChange={onInputChange}
              fullWidth
              xs={12}
              sx={{ marginTop: 3 }}
            />
             <TextField
              label="correo"
              type="email"
              placeholder="urosaclawred21@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              xs={12}
              sx={{ marginTop: 3 }}
            />
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              xs={12}
              sx={{ marginTop: 3 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
        <Grid item xs={12} display={!!errorMessage ? '':'none'} >
            <Alert severity="error">
              {errorMessage}
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <Button disabled={isCheackingAuthentication} variant="contained" fullWidth type="submit">
                Crear Cuenta
            </Button>
          </Grid>
        </Grid>

        <Grid container direction={"row"} justifyContent={"end"}>
          <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
          <Link component={RouteLink} color={"inherit"} to={"/auth/login"}>
            Ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
