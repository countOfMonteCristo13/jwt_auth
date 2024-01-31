import styled from "styled-components";

type InputProps = {
  type?: string;
  placeholder: string;
  onAction?: () => void;
  required?: boolean;
  readonly?: boolean;
  register?: any;
  errors?: any;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  onAction,
  required = false,
  readonly = false,
  register,
  errors,
}) => {
  const fieldName = placeholder.toLowerCase();

  return (
    <StyledInputWrapper>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={onAction}
        required={required}
        readOnly={readonly}
        {...register(fieldName)}
      />
      {errors[fieldName] && (
        <StyledError>{errors[fieldName]?.message}</StyledError>
      )}
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  width: 100%;
`;

const StyledError = styled.p`
  color: red;
  /* font-size: 1.3rem; */
`;

export default Input;
