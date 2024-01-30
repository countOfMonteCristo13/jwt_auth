import styled from "styled-components";

type WandRowProps = {
  flexibility?: string;
  owner: string;
  length?: number;
  wood: string;
  inspect?: () => void;
  authenticated?: boolean;
};

const WandRow: React.FC<WandRowProps> = ({
  flexibility,
  owner,
  length,
  wood,
  inspect,
  authenticated = true,
}) => {
  return (
    <StyledWandRow>
      {authenticated ? (
        <>
          <td>{flexibility}</td>
          <td>{owner}</td>
          <td>{length}</td>
          <td>{wood}</td>
          <td>
            <p onClick={inspect}>View Details</p>
          </td>
        </>
      ) : (
        <>
          <td>{owner}</td>
          <td>{wood}</td>
        </>
      )}
    </StyledWandRow>
  );
};

const StyledWandRow = styled.tr`
  td:last-child p {
    color: var(--primary-color);
    cursor: pointer;
    width: fit-content;
  }

  td:last-child p:hover {
    color: var(--primary-darkcolor);
  }
`;

export default WandRow;
