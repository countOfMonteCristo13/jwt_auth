import styled from "styled-components";

type WandRowProps = {
  flexibility: string;
  owner: string;
  length: number;
  wood: string;
  inspect: () => void;
  disabled?: boolean;
};

const WandRow: React.FC<WandRowProps> = ({
  flexibility,
  owner,
  length,
  wood,
  inspect,
  disabled = false,
}) => {
  return (
    <StyledWandRow disabled={disabled}>
      <td>{flexibility}</td>
      <td>{owner}</td>
      <td>{length}</td>
      <td>{wood}</td>
      <td>
        <p onClick={!disabled ? inspect : undefined}>View Details</p>
      </td>
    </StyledWandRow>
  );
};

const StyledWandRow = styled.tr<{ disabled: boolean }>`
  td:last-child p {
    color: ${(props) => (!props.disabled ? "var(--primary-color)" : "gray")};
    cursor: ${(props) => (!props.disabled ? "pointer" : "auto")};
    width: fit-content;
  }

  td:last-child p:hover {
    color: ${(props) => !props.disabled && "var(--primary-darkcolor)"};
  }
`;

export default WandRow;
