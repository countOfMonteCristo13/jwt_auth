import styled from "styled-components";

type WandDetailProps = {
  title: string;
};

const WandDetail: React.FC<WandDetailProps> = ({ title }) => {
  return <StyledWandDetail>{title}</StyledWandDetail>;
};

const StyledWandDetail = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  width: 100%;
`;

export default WandDetail;
