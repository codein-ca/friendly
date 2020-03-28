import React from "react";
import styled from "@emotion/styled";
import COLORS from "../colors";

type Props = {
  name: string;
  label?: string;
  onClick: () => void;
  options?: TOptions;
};

type TOptions = {
  width: {
    em?: number;
    px?: number;
    percent?: number;
  };
};

const StyledInput = styled.input<Props>`
  padding: 1em;
  border: none;
  color: hsla(0, 0%, 50%, 1);
  outline: 1px solid hsla(0, 0%, 50%, 1);
  background-color: #e8e8e8;
  width: ${({ options }: Props) => {
    if (options && options.width) {
      if (options.width.em) return `${options.width.em}em`;
      if (options.width.percent) return `${options.width.percent}%`;
    }
    return "10em";
  }};
  max-width: 100%;

  &:focus,
  &:active {
    color: crimson;
    // TODO: have a central theme
    // color: $//{COLORS => {
    //   return COLORS.primary ? COLORS.primary : "crimson";
    // }};
    outline: 2px solid crimson;
    background-color: snow;
    box-shadow: 0 0 6px 3px rgba(210, 31, 212, 0.25);
  }
`;

export const Button = (props: Props) => (
  <StyledInput type="button" {...props} value={props.label || props.name} />
);
