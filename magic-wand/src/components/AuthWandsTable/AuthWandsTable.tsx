import { useNavigate } from "react-router-dom";
import { StyledTable, TableHeader } from "../../styles/TableLayouts";
import Wand from "../../types/wand";
import WandRow from "../WandRow/WandRow";

type AuthWandsTableProps = {
  wands: Wand[];
  isLoading: boolean;
  error: any;
};

const AuthWandsTable: React.FC<AuthWandsTableProps> = ({
  wands,
  isLoading,
  error,
}) => {
  const navigate = useNavigate();

  if (error) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledTable>
      <thead>
        <TableHeader>
          <th>Flexibility</th>
          <th>Owner</th>
          <th>Length</th>
          <th>Wood</th>
          <th>Inspect</th>
        </TableHeader>
      </thead>
      <tbody>
        {wands.map((wand) => (
          <WandRow
            key={wand._id}
            owner={wand.owner.username}
            wood={wand.wood}
            length={wand.length}
            flexibility={wand.flexibility}
            inspect={() => navigate(`/${wand._id}`)}
          />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default AuthWandsTable;
