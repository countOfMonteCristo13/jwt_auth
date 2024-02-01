import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthContext from '../../context/AuthProvider';
import { userSchema } from '../../schemas/schemas';
import axios from '../../api/axios';
import User from '../../types/user';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {
  ButtonsContainer,
  CenteredSection,
  ContainerWrapper,
  InputsContainer,
} from '../../styles/FormLayouts';

const LOGIN_URL = '/api/auth';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<User> = async user => {
    try {
      const response = await axios.post(LOGIN_URL, user, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      const accessToken = response?.data?.accessToken;
      setAuth({
        username: user.username,
        password: user.password,
        accessToken,
      });
      navigate('/auth/wands');
    } catch (error: any) {
      setAuthError(error?.response.data.message);
    }
  };

  return (
    <CenteredSection>
      <ContainerWrapper>
        <InputsContainer>
          <Input
            placeholder="Username"
            register={register}
            inputErrors={errors}
          />
          <Input
            type="password"
            placeholder="Password"
            register={register}
            inputErrors={errors}
          />
        </InputsContainer>
        {authError && <p>{authError}</p>}
        <ButtonsContainer>
          <Button title="Log in" onAction={handleSubmit(onSubmit)} />
          <Button
            title="Continue as Guest"
            type="secondary"
            onAction={() => navigate('/wands')}
          />
        </ButtonsContainer>
      </ContainerWrapper>
    </CenteredSection>
  );
};

export default Login;
