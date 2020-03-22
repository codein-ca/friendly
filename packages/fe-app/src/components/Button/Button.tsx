import React from "react";
import styled from "@emotion/styled";

type TButton = {
  name: string;
  label: string;
  onClick?: () => void;
  onChange?: () => void;
  override?: ButtonOverride;
};
type ButtonOverrideParent = {
  override: ButtonOverride;
};
type ButtonOverride = {
  width: {
    em?: number;
    px?: number;
    percent?: number;
  };
};

const Label = styled.label<ButtonOverrideParent>`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  width: ${({ override }) => {
    if (override && override.width && override.width.em) {
      return `${override.width.em}em`;
    }
    if (override && override.width && override.width.percent) {
      return `${override.width.percent}%`;
    }
    return "10em";
  }};
  max-width: 100%;
`;

const LabelText = styled.span`
  user-select: none;
  font-size: x-small;
  font-weight: lighter;
  font-style: italic;
  font-stretch: extra-expanded;
  text-transform: uppercase;
  color: #7b7b7b;
`;

const ButtonInput = styled.input`
  border: 1px solid #cacaca;
  background-color: #e8e8e8;
  &:focus,
  &:active {
    border-color: hotpink;
    background-color: snow;
  }
`;

export const Button = ({
  name,
  label,
  onChange,
  onClick,
  override
}: TButton) => (
  <Label htmlFor={name} override={override}>
    <LabelText aria-label={label}>{label}</LabelText>
    <ButtonInput
      type="button"
      name={name}
      onClick={onClick}
      onChange={onChange}
    />
  </Label>
);
