import styled from 'styled-components';

export const CenteredSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 300px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputsContainer = styled(FormContainer)``;

export const ButtonsContainer = styled(FormContainer)``;
