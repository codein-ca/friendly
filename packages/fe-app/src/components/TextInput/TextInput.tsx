import React from "react";
import styled from "@emotion/styled";

type Props = {
  name: string;
  label: string;
  onChange?: () => void;
  options?: TInputOptions;
};
type TLabel = {
  override?: TInputOptions;
};
type TInputOptions = {
  width: {
    em?: number;
    px?: number;
    percent?: number;
  };
};

const Label = styled.label<TLabel>`
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
  font-size: small;
  font-weight: lighter;
  // font-style: italic;
  font-stretch: extra-expanded;
  text-transform: uppercase;
  // color: #7b7b7b;
`;

const StyledInput = styled.input`
  padding: 0.5em 1em;
  border: 1px solid #cacaca;
  background-color: white;
  &:focus,
  &:active {
    border-color: hotpink;
    background-color: snow;
  }
`;

export const TextInput = ({ name, label, onChange, options }: Props) => (
  <Label htmlFor={name} override={options}>
    <LabelText aria-label={label}>{label}</LabelText>
    <StyledInput type="text" name={name} onChange={onChange} />
  </Label>
);
