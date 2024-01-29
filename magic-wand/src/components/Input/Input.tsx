import styled from "styled-components";

type InputProps = {
  type?: string;
  placeholder: string;
  onAction?: () => void;
  required?: boolean;
  readonly?: boolean;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  onAction,
  required = false,
  readonly = false,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onAction}
      required={required}
      readOnly={readonly}
    />
  );
};

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  width: 100%;
`;

export default Input;
