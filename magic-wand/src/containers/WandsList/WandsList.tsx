import AuthWandsTable from "../../components/AuthWandsTable/AuthWandsTable";
import TableContainerHeading from "../../components/TableContainerHeading/TableContainerHeading";
import WandsTable from "../../components/WandsTable/WandsTable";
import { TableContainer } from "../../styles/TableLayouts";

type WandsListProps = {
  authenticated?: boolean;
};

const WandsList: React.FC<WandsListProps> = ({ authenticated = false }) => {
  return (
    <TableContainer>
      <TableContainerHeading authenticated={authenticated} />
      {authenticated ? <AuthWandsTable /> : <WandsTable />}
    </TableContainer>
  );
};

export default WandsList;
