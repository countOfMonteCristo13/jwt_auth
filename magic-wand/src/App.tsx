import "./App.css";
import CreateWand from "./containers/CreateWand/CreateWand";
import Login from "./containers/Login/Login";
import WandDetails from "./containers/WandDetails/WandDetails";
import { StyledMain } from "./styles/Layout";

function App() {
  return (
    <StyledMain>
      {/* <WandDetails /> */}
      {/* <Login /> */}
      <CreateWand />
    </StyledMain>
  );
}

export default App;
