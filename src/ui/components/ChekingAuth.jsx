import { CircularProgress, Grid } from "@mui/material";
import { AppTheme } from "../../theme";

export const ChekingAuth = () => {
  return (
    <AppTheme>
    <Grid
      container
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
        container
        justifyContent='center'
      >
        <CircularProgress  sx={{
        color: "secondary.main",
      }}/>

      </Grid>
    </Grid>
    </AppTheme>
  );
};
