import WandRow from "../WandRow/WandRow";
import { StyledTable, TableHeader } from "../../styles/TableLayouts";
import Wand from "../../types/wand";

type WandsTableProps = {
  authenticated?: boolean;
  wands: Wand[];
  isLoading: boolean;
  error: any;
};

const WandsTable: React.FC<WandsTableProps> = ({
  authenticated = false,
  wands,
  isLoading,
  error,
}) => {
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
          <th>Owner</th>
          <th>Wood</th>
        </TableHeader>
      </thead>
      <tbody>
        {wands.map((wand) => (
          <WandRow
            key={wand._id}
            owner={wand.owner.username}
            wood={wand.wood}
            authenticated={authenticated}
          />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default WandsTable;
