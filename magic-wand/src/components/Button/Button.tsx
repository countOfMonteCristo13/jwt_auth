import React from "react";
import styled from "styled-components";

type ButtonProps = {
  title: string;
  type?: "primary" | "secondary";
  onAction?: (...args: any[]) => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  type = "primary",
  onAction,
}) => {
  return (
    <StyledButton type={type} onClick={onAction}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ type?: "primary" | "secondary" }>`
  color: #ffffff;
  background-color: ${(props) =>
    props.type === "primary" ? "var(--primary-color)" : "transparent"};
  border: ${(props) =>
    props.type === "secondary" && "2px solid var(--primary-color)"};
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.type === "primary" && "var(--primary-darkcolor)"};

    color: ${(props) => props.type === "secondary" && "var(--primary-color)"};
  }
`;

export default Button;
