import styled from "styled-components";

export const TableContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1000px;
  align-self: center;
  gap: 2rem;
`;

export const StyledTable = styled.table`
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

export const TableHeader = styled.tr`
  th {
    font-size: 1.5rem;
    font-weight: 500;
    border-bottom: 2px solid var(--primary-color);
    padding: 0.5rem;
  }
`;
