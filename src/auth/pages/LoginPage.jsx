import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import React, { useMemo } from "react";
import { Link as RouteLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSingIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";

const formData = {
  
    email:"" ,
    password:"",
  
}

export const LoginPage = () => {
  const { status ,errorMessage} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "cheking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password}));
  };

  const onGoogleSingIn = (event) => {
    dispatch(startGoogleSingIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item>
            <TextField
              label="correo"
              type="email"
              placeholder="urosaclawred21@gmail.com"
              fullWidth
              xs={12}
              sx={{ marginTop: 3 }}
              value={email}
              name="email"
              onChange={onInputChange}
            />
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              xs={12}
              sx={{ marginTop: 3 }}
              value={password}
              name="password"
              onChange={onInputChange}
            />
          </Grid>
        </Grid>

        <Grid container display={!!errorMessage ? '':'none'} mt={2}>
        <Grid item xs={12}  >
            <Alert severity="error">
              {errorMessage}
            </Alert>
          </Grid>
        </Grid>


        <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
              LOGIN
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onGoogleSingIn}>
              <Google />

              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction={"row"} justifyContent={"end"}>
          <Link component={RouteLink} color={"inherit"} to={"/auth/register"}>
            Crear Cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
