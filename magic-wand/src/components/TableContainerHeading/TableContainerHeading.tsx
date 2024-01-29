import styled from "styled-components";
import Button from "../Button/Button";

type TableContainerHeadingProps = {
  authenticated?: boolean;
  createNewWand?: () => void;
  logIn?: () => void;
  singOut?: () => void;
};

const TableContainerHeading: React.FC<TableContainerHeadingProps> = ({
  authenticated = false,
  createNewWand,
  logIn,
  singOut,
}) => {
  return (
    <StyledHeading authenticated={authenticated}>
      {authenticated ? (
        <>
          <Button title="Create New Wand" onAction={createNewWand} />
          <Button title="Log Out" type="secondary" onAction={logIn} />
        </>
      ) : (
        <Button title="Log In" onAction={singOut} />
      )}
    </StyledHeading>
  );
};

const StyledHeading = styled.div<{ authenticated: boolean }>`
  display: flex;
  justify-content: ${(props) =>
    props.authenticated ? "space-between" : "flex-end"};
  width: 100%;

  button {
    width: fit-content;
  }
`;

export default TableContainerHeading;
