import { Route, Routes } from "react-router-dom";
import "./App.css";
import WandsList from "./containers/WandsList/WandsList";
import CreateWand from "./containers/CreateWand/CreateWand";
import Login from "./containers/Login/Login";
import WandDetails from "./containers/WandDetails/WandDetails";
import { StyledMain } from "./styles/GlobalLayouts";

function App() {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" element={<WandsList authenticated={true} />} />
        <Route path="/:id" element={<WandDetails />} />
        <Route path="/add-wand" element={<CreateWand />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </StyledMain>
  );
}

export default App;

// "65b96c975ad0325443a53d47"
