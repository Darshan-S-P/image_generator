import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 10px 24px;
  @media (max-width: 600px) {
    padding: 8px 12px;
  }
  background: ${({ type, theme }) =>
    type === "secondary" ? theme.secondary : theme.primary};
  
  ${({ isDisabled }) =>
    isDisabled &&
    `
      opacity: 0.4;
      cursor: not-allowed;
  `}
  
  ${({ isLoading }) =>
    isLoading &&
    `
      opacity: 0.8;
  `}
`;

const Button = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  type,
  onClick,
  flex,
}) => {
  return (
    <StyledButton
      onClick={() => !isDisabled && !isLoading && onClick()}
      isDisabled={isDisabled}
      type={type}
      isLoading={isLoading}
      flex={flex}
    >
      {isLoading && (
        <CircularProgress
          style={{ width: "18px", height: "18px", color: "white" }}
        />
      )}
      {leftIcon}
      {text}
      {rightIcon && !isLoading && rightIcon}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  rightIcon: PropTypes.element,
  leftIcon: PropTypes.element,
  type: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func.isRequired,
  flex: PropTypes.string,
};

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  rightIcon: null,
  leftIcon: null,
  type: "primary",
  flex: "0 1 auto",
};

export default Button;
