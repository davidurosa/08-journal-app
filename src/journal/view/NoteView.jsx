import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight={"light"}>
          14 de junio, 2023
        </Typography>
      </Grid>
      <Grid>
        <Button color="primary" sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="titulo"
          sx={{ border: "none", mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="¿Qué sucedió en el día de hoy"
          multiline
          minRows={5}
        />
      </Grid>

      {/* Galeria de imagenes */}

      <ImageGallery/>
    </Grid>
  );
};
