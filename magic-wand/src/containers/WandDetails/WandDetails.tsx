import { useNavigate, useParams } from 'react-router-dom';
import useWand from '../../hooks/useWand';
import Button from '../../components/Button/Button';
import WandDetail from '../../components/WandDetail/WandDetail';
import {
  ButtonsContainer,
  CenteredSection,
  ContainerWrapper,
  InputsContainer,
} from '../../styles/FormLayouts';

const WandDetails = () => {
  const { id } = useParams();
  const { wand, isLoading, error } = useWand({ id });
  const navigate = useNavigate();

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
          <WandDetail title={wand.flexibility} />
          <WandDetail title={wand.owner.username} />
          <WandDetail title={wand.length.toString()} />
          <WandDetail title={wand.wood} />
        </InputsContainer>
        <ButtonsContainer>
          <Button
            title="Back"
            type="secondary"
            onAction={() => navigate('/auth/wands')}
          />
        </ButtonsContainer>
      </ContainerWrapper>
    </CenteredSection>
  );
};

export default WandDetails;
