import React from "react";
import { action } from "@storybook/addon-actions";
// import { Button } from "@storybook/react/demo";
import "@storybook/addon-console";
import { boolean, withKnobs } from "@storybook/addon-knobs";

type ButtonProps = {
  onClick: () => void;
  text?: string;
  children?: any;
};

const Button = ({ onClick, text, children }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={boolean("Disabled", false)}>
      {text} {children}
    </button>
  );
};

export default {
  title: "Button: examples",
  component: Button,
  decorators: [withKnobs]
  // parameters: {
  //   backgrounds: [
  //     { name: "twitter", value: "#00aced", default: true },
  //     { name: "facebook", value: "#3b5998" }
  //   ]
  // }
};

export const UseCase1_Button = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const UseCase2_Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
