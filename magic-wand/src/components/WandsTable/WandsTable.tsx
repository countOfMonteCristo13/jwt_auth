import WandRow from "../WandRow/WandRow";
import { StyledTable, TableHeader } from "../../styles/TableLayouts";

type WandsTableProps = {
  authenticated?: boolean;
};

const WandsTable: React.FC<WandsTableProps> = ({ authenticated = false }) => {
  return (
    <StyledTable>
      <thead>
        <TableHeader>
          <th>Flexibility</th>
          <th>Wood</th>
        </TableHeader>
      </thead>
      <tbody>
        <WandRow owner="Olivander" wood="Alder" authenticated={authenticated} />
        <WandRow
          owner="Jimmy Kiddel"
          wood="Acacia"
          authenticated={authenticated}
        />
      </tbody>
    </StyledTable>
  );
};

export default WandsTable;
