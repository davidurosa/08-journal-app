import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JournalApp } from "../JournalApp";
import { ChekingAuth } from "../ui";
import { useCheckAuth } from "../hooks";

export const App = () => {
  const status = useCheckAuth();

  if (status === "cheking") {
    return <ChekingAuth />;
  }

  return (
    <Routes>

      {
        (status==='authenticated')
        ?  <Route path="/*" element={<JournalApp />} />
        : <Route path="/auth/*" element={<AuthRoute />} />
      }

      <Route path="/*" element={<Navigate to='/auth/login'/>}/>

    
    </Routes>
  );
};
