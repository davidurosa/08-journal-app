import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

export const Navbar = ({ drawerWhidth }) => {

  const dispatch = useDispatch();


  const onLogout = () =>{
    dispatch(startLogout());
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          sm: `calc(100% - ${drawerWhidth}px)`
        },
        ml: { sm: `${drawerWhidth}px)` },

      }}
    >
      <Toolbar>
        <IconButton color="inherit" edge='start' sx={{mr:2,display:{sm:'none'}}}>
          <MenuOutlined />
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant="h6" noWrap component={'div'}>Diario</Typography>

        <IconButton color="secondary" onClick={onLogout}>
            <LogoutOutlined/>
        </IconButton>
      </Grid>
      </Toolbar>

      

    </AppBar>
  );
};
