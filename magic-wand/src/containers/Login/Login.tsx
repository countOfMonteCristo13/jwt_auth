import {
  ButtonsContainer,
  CenteredSection,
  ContainerWrapper,
  InputsContainer,
} from "../../styles/FormLayouts";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import User from "../../types/user";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/api/auth";

const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<User> = async (user) => {
    try {
      const response = await axios.post(LOGIN_URL, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response.data);
      const accessToken = response?.data?.accessToken;
      setAuth({
        username: user.username,
        password: user.password,
        accessToken,
      });
      navigate("/auth/wands");
    } catch (error: any) {
      console.log(error);
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
            onAction={() => navigate("/wands")}
          />
        </ButtonsContainer>
      </ContainerWrapper>
    </CenteredSection>
  );
};

export default Login;
