import "./App.css";
import WandsList from "./containers/WandsList/WandsList";
// import CreateWand from "./containers/CreateWand/CreateWand";
// import Login from "./containers/Login/Login";
// import WandDetails from "./containers/WandDetails/WandDetails";
import { StyledMain } from "./styles/GlobalLayouts";

function App() {
  return (
    <StyledMain>
      {/* <WandDetails /> */}
      {/* <Login /> */}
      {/* <CreateWand /> */}
      <WandsList authenticated={true} />
    </StyledMain>
  );
}

export default App;
