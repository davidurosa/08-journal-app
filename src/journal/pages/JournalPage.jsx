import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { IconButton, Typography } from "@mui/material";
import { NoteView, NothingSelectedView } from "../view";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*       <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti iure, eveniet doloribus nostrum consectetur beatae aliquam praesentium quia vero vel aspernatur dignissimos in, itaque, dolores tenetur? Explicabo, accusantium similique.</Typography>
       */}

      <NothingSelectedView />
      {/*       <NoteView/>
       */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "secondary.main",
          ':hover':{backgroundColor: "secondary.main",opacity:0.9},
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
