import { StyledTable, TableHeader } from "../../styles/TableLayouts";
import WandRow from "../WandRow/WandRow";

const AuthWandsTable = () => {
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
        <WandRow
          flexibility="Unyeilding"
          owner="Olivander"
          length={9}
          wood="Alder"
          inspect={() => {}}
        />
        <WandRow
          flexibility="Flexible"
          owner="Jimmy Kiddel"
          length={14}
          wood="Acacia"
          inspect={() => {}}
        />
        <WandRow
          flexibility="Unyeilding"
          owner="Olivander"
          length={9}
          wood="Alder"
          inspect={() => {}}
        />
        <WandRow
          flexibility="Flexible"
          owner="Jimmy Kiddel"
          length={14}
          wood="Acacia"
          inspect={() => {}}
        />
        <WandRow
          flexibility="Unyeilding"
          owner="Olivander"
          length={9}
          wood="Alder"
          inspect={() => {}}
        />
        <WandRow
          flexibility="Flexible"
          owner="Jimmy Kiddel"
          length={14}
          wood="Acacia"
          inspect={() => {
            console.log("cao");
          }}
        />
      </tbody>
    </StyledTable>
  );
};

export default AuthWandsTable;
