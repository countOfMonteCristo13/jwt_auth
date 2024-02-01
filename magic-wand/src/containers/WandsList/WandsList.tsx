import { useNavigate } from "react-router-dom";
import AuthWandsTable from "../../components/AuthWandsTable/AuthWandsTable";
import TableContainerHeading from "../../components/TableContainerHeading/TableContainerHeading";
import WandsTable from "../../components/WandsTable/WandsTable";
import useWands from "../../hooks/useWands";
import { TableContainer } from "../../styles/TableLayouts";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

type WandsListProps = {
  authenticated?: boolean;
};

const WandsList: React.FC<WandsListProps> = ({ authenticated = false }) => {
  const { setAuth } = useContext(AuthContext);
  const { wands, isLoading, error } = useWands();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setAuth({});
    navigate("/");
  };

  return (
    <TableContainer>
      <TableContainerHeading
        authenticated={authenticated}
        createNewWand={() => navigate("/add-wand")}
        logIn={() => navigate("/login")}
        logOut={handleLogOut}
      />
      {authenticated ? (
        <AuthWandsTable wands={wands} error={error} isLoading={isLoading} />
      ) : (
        <WandsTable wands={wands} error={error} isLoading={isLoading} />
      )}
    </TableContainer>
  );
};

export default WandsList;
