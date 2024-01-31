import "./App.css";
// import WandsList from "./containers/WandsList/WandsList";
// import CreateWand from "./containers/CreateWand/CreateWand";
// import Login from "./containers/Login/Login";
import WandDetails from "./containers/WandDetails/WandDetails";
import { StyledMain } from "./styles/GlobalLayouts";

function App() {
  return (
    <StyledMain>
      <WandDetails id="65b96c975ad0325443a53d47" />
      {/* <Login /> */}
      {/* <CreateWand /> */}
      {/* <WandsList authenticated={true} /> */}
    </StyledMain>
  );
}

export default App;
