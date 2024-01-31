import AuthWandsTable from "../../components/AuthWandsTable/AuthWandsTable";
import TableContainerHeading from "../../components/TableContainerHeading/TableContainerHeading";
import WandsTable from "../../components/WandsTable/WandsTable";
import useWands from "../../hooks/useWands";
import { TableContainer } from "../../styles/TableLayouts";

type WandsListProps = {
  authenticated?: boolean;
};

const WandsList: React.FC<WandsListProps> = ({ authenticated = false }) => {
  const { wands, isLoading, error } = useWands();

  console.log(wands);

  return (
    <TableContainer>
      <TableContainerHeading authenticated={authenticated} />
      {authenticated ? (
        <AuthWandsTable wands={wands} error={error} isLoading={isLoading} />
      ) : (
        <WandsTable wands={wands} error={error} isLoading={isLoading} />
      )}
    </TableContainer>
  );
};

export default WandsList;
