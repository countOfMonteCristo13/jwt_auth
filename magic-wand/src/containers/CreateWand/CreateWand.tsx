import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  ButtonsContainer,
  CenteredSection,
  ContainerWrapper,
  InputsContainer,
} from "../../styles/FormLayouts";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { woodEnum } from "../../types/woodEnum";
import Wand from "../../types/wand";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    flexibility: yup.string().required("Flexibility is required"),
    length: yup.number().positive().required("Length is required"),
    owner: yup.string().required("Owner is required"),
    wood: yup.string().oneOf(woodEnum).required("Wood is required"),
  })
  .required();

const CreateWand = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Wand>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Wand> = async (wand: Wand) => {
    const tempString = wand.owner;
    wand.owner = { _id: tempString };
    try {
      const response = await axios.post("/api/wands/add-wand", wand);
      console.log(response);
      navigate("/");
    } catch (error: any) {
      setError("owner", {
        type: "manual",
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
          <Input placeholder="Owner" register={register} inputErrors={errors} />
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
            onAction={() => navigate("/")}
          />
        </ButtonsContainer>
      </ContainerWrapper>
    </CenteredSection>
  );
};

export default CreateWand;
