import React, { ChangeEvent, useState } from "react";
import "@storybook/addon-console";
import { text, boolean, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

type InputProps = {
  id: string;
  placeholder?: string;
  label?: string;
};

const InputText = ({ id, label, placeholder }: InputProps) => {
  return (
    <label htmlFor={`InputText_${id}`}>
      <span>{label}</span>
      <input
        name={id}
        type="text"
        placeholder={placeholder}
        disabled={boolean("Disabled", false)}
      />
    </label>
  );
};

export default {
  title: "Input Text: examples",
  component: InputText,
  decorators: [withKnobs, withA11y],
  parameters: {
    knobs: {
      timestamps: true //NOTE: double-check how it work (like is it working right now?)
    }
  }
};

const label = "my label";
const placeholder = "type here...";

export const UseCase1_Input = () => (
  <InputText
    id="UseCase1"
    placeholder={text("Example: placeholder", placeholder)}
    label={text("Example: label", label)}
  />
);
