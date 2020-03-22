import React from "react";
import Button from "./";

export const ButtonStory1 = () => <Button name="Button1" label="Button #1" />;
ButtonStory1.story = {
  name: "with name and label"
};

export const ButtonStory2 = () => (
  <Button name="Button2" label="Button #2" override={{ width: { em: 20 } }} />
);

ButtonStory2.story = {
  name: "also with width override"
};

export const ButtonStory3 = () => (
  <Button
    name="Button3"
    label="Button #3"
    override={{ width: { percent: 100 } }}
  />
);

ButtonStory3.story = {
  name: "with width override - percent"
};

export default {
  title: "Button (basics)",
  component: Button
};
