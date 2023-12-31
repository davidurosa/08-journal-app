import { Grid, Typography } from "@mui/material";
import React from "react";
import { AppTheme } from "../../theme";

export const AuthLayout = ({children,title=''}) => {
  return (
    <AppTheme>
      
    <Grid
      
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 3,
      }}
    >
      <Grid
        item
        xs={3}
        sx={{
            width:{sm:450},
             backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
              
             }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
    </AppTheme>
  );
};
