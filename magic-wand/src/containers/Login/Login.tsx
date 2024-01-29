import {
  ButtonsContainer,
  CenteredSection,
  ContainerWrapper,
  InputsContainer,
} from "../../styles/FormLayouts";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <CenteredSection>
      <ContainerWrapper>
        <InputsContainer>
          <Input placeholder="Username" />
          <Input type="password" placeholder="Password" />
        </InputsContainer>
        <ButtonsContainer>
          <Button title="Log in" />
          <Button title="Continue as Guest" type="secondary" />
        </ButtonsContainer>
      </ContainerWrapper>
    </CenteredSection>
  );
};

export default Login;
