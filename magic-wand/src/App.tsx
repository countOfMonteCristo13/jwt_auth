import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import WandsList from "./containers/WandsList/WandsList";
import CreateWand from "./containers/CreateWand/CreateWand";
import Login from "./containers/Login/Login";
import WandDetails from "./containers/WandDetails/WandDetails";
import { StyledMain } from "./styles/GlobalLayouts";
import RequireAuth from "./routes/RequireAuth";

function App() {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/wands" element={<WandsList authenticated={false} />} />
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="/auth/wands/:id" element={<WandDetails />} />
          <Route path="/add-wand" element={<CreateWand />} />
          <Route
            path="/auth/wands"
            element={<WandsList authenticated={true} />}
          />
        </Route>

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </StyledMain>
  );
}

export default App;
