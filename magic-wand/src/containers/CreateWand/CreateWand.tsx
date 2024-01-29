import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  ButtonsContainer,
  CenteredSection,
  ContainerWrapper,
  InputsContainer,
} from "../../styles/Layout";

const CreateWand = () => {
  return (
    <CenteredSection>
      <ContainerWrapper>
        <InputsContainer>
          <Input placeholder="Flexibility" />
          <Input placeholder="Owner" />
          <Input placeholder="Length" />
          <Input placeholder="Wood" />
        </InputsContainer>
        <ButtonsContainer>
          <Button title="Create Wand" />
          <Button title="Back" type="secondary" />
        </ButtonsContainer>
      </ContainerWrapper>
    </CenteredSection>
  );
};

export default CreateWand;
