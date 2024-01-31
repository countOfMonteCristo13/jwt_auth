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

const schema = yup
  .object({
    flexibility: yup.string().required("Flexibility is required"),
    length: yup.number().positive().required("Length is required"),
    owner: yup.string().required("Owner is required"),
    wood: yup.string().oneOf(woodEnum).required("Wood is required"),
  })
  .required();

const CreateWand = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Wand>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Wand> = (wand: Wand) => {
    console.log(wand);
  };

  return (
    <CenteredSection>
      <ContainerWrapper>
        <InputsContainer>
          <Input
            placeholder="Flexibility"
            register={register}
            errors={errors}
          />
          <Input placeholder="Owner" register={register} errors={errors} />
          <Input placeholder="Length" register={register} errors={errors} />
          <Input placeholder="Wood" register={register} errors={errors} />
        </InputsContainer>
        <ButtonsContainer>
          <Button title="Create Wand" onAction={handleSubmit(onSubmit)} />
          <Button title="Back" type="secondary" />
        </ButtonsContainer>
      </ContainerWrapper>
    </CenteredSection>
  );
};

export default CreateWand;
