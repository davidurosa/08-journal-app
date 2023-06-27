import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { IconButton, Typography } from "@mui/material";
import { NoteView, NothingSelectedView } from "../view";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onclickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {!!active
        ?<NoteView /> 
        : <NothingSelectedView />
      }

      <IconButton
        disabled={isSaving}
        onClick={onclickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "secondary.main",
          ":hover": { backgroundColor: "secondary.main", opacity: 0.9 },
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
