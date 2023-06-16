import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JournalApp } from "../JournalApp";

export const App = () => {
  return (
    <Routes>
      {/* Login y registro */}
      <Route path="/auth/*" element={<AuthRoute />} />

      {/* Journal App */}
      <Route path="/*" element={<JournalApp />} />
    </Routes>
  );
};
