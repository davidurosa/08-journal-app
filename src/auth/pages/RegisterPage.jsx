import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: "urosaclawred21@gmail.com",
  password: "123456",
  displayName:'David Urosa'
}


export const RegisterPage = () => {


  const { email, password,displayName, onInputChange,formState } = useForm(formData);


const onSubmit=(event)=>{

  event.preventDefault();
  console.log(formState);

}


  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              name="displayName"
              value={displayName}

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
              xs={12}
              sx={{ marginTop: 3 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth type="submit">
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
