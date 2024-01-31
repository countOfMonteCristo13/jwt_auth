import {
  ButtonsContainer,
  CenteredSection,
  ContainerWrapper,
  InputsContainer,
} from "../../styles/FormLayouts";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import useWand from "../../hooks/useWand";

type WandDetailsProps = {
  id: string;
};

const WandDetails: React.FC<WandDetailsProps> = ({ id }) => {
  const { wand, isLoading, error } = useWand({ id });

  if (error) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <CenteredSection>
      <ContainerWrapper>
        <InputsContainer>
          <Input placeholder={wand.flexibility} readonly={true} />
          <Input placeholder={wand.owner.username} readonly={true} />
          <Input placeholder={wand.length.toString()} readonly={true} />
          <Input placeholder={wand.wood} readonly={true} />
        </InputsContainer>
        <ButtonsContainer>
          <Button title="Back" type="secondary" />
        </ButtonsContainer>
      </ContainerWrapper>
    </CenteredSection>
  );
};

export default WandDetails;
