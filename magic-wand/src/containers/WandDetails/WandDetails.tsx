import {
  ButtonsContainer,
  CenteredSection,
  ContainerWrapper,
  InputsContainer,
} from "../../styles/FormLayouts";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const WandDetails = () => {
  return (
    <CenteredSection>
      <ContainerWrapper>
        <InputsContainer>
          <Input placeholder="Unyeilding" readonly={true} />
          <Input placeholder="Olivander" readonly={true} />
          <Input placeholder="9" readonly={true} />
          <Input placeholder="Alder" readonly={true} />
        </InputsContainer>
        <ButtonsContainer>
          <Button title="Back" type="secondary" />
        </ButtonsContainer>
      </ContainerWrapper>
    </CenteredSection>
  );
};

export default WandDetails;
