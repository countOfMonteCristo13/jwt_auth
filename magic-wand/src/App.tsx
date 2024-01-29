import "./App.css";
import TableContainerHeading from "./components/TableContainerHeading/TableContainerHeading";
import WandsTable from "./components/WandsTable/WandsTable";
// import CreateWand from "./containers/CreateWand/CreateWand";
// import Login from "./containers/Login/Login";
// import WandDetails from "./containers/WandDetails/WandDetails";
import { StyledMain } from "./styles/GlobalLayouts";
import { TableContainer } from "./styles/TableLayouts";

function App() {
  return (
    <StyledMain>
      {/* <WandDetails /> */}
      {/* <Login /> */}
      {/* <CreateWand /> */}
      <TableContainer>
        <TableContainerHeading />
        <WandsTable />
      </TableContainer>
    </StyledMain>
  );
}

export default App;
