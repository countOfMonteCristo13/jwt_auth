import styled from "styled-components";
import WandRow from "../WandRow/WandRow";

const WandsTable = () => {
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

const StyledTable = styled.table`
  color: white;
  border-spacing: 0;
  text-align: left;
  width: 100%;

  td {
    padding: 0.5rem;
  }

  tr:nth-child(2n) {
    background: var(--table-darkcolor);
  }

  td {
  }
`;

const TableHeader = styled.tr`
  th {
    font-size: 1.5rem;
    font-weight: 500;
    border-bottom: 2px solid var(--primary-color);
    padding: 0.5rem;
  }
`;

export default WandsTable;
