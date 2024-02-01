import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthContext from '../../context/AuthProvider';
import { wandSchema } from '../../schemas/schemas';
import axios from '../../api/axios';
import Wand from '../../types/wand';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {
  ButtonsContainer,
  CenteredSection,
  ContainerWrapper,
  InputsContainer,
} from '../../styles/FormLayouts';

const CreateWand = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Wand>({
    resolver: yupResolver(wandSchema),
  });

  const onSubmit: SubmitHandler<Wand> = async (wand: Wand) => {
    const tempString = wand.owner;
    wand.owner = { _id: tempString };
    try {
      await axios.post('/api/wands/add-wand', wand);
      navigate('/auth/wands');
    } catch (error: any) {
      setError('owner', {
        type: 'manual',
        message: error.response.data.error,
      });
    }
  };

  return (
    <CenteredSection>
      <ContainerWrapper>
        <InputsContainer>
          <Input
            placeholder="Flexibility"
            register={register}
            inputErrors={errors}
          />
          <Input
            placeholder="Owner"
            register={register}
            inputErrors={errors}
            value={auth?.username}
            readOnly={true}
          />
          <Input
            placeholder="Length"
            register={register}
            inputErrors={errors}
          />
          <Input placeholder="Wood" register={register} inputErrors={errors} />
        </InputsContainer>
        <ButtonsContainer>
          <Button title="Create Wand" onAction={handleSubmit(onSubmit)} />
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

export default CreateWand;
