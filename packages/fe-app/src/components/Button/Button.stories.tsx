import React from "react";
import Button from ".";

const onClick = () => console.log("Clicked...");

export const ButtonStory1 = () => (
  <Button name="Button1" label="Button #1" onClick={onClick} />
);
ButtonStory1.story = {
  name: "with name and label"
};

export const ButtonStory2 = () => (
  <Button name="Button2" onClick={onClick} options={{ width: { em: 20 } }} />
);

ButtonStory2.story = {
  name: "no label but with width override - em"
};

export const ButtonStory3 = () => (
  <Button
    name="Button3"
    label="Button #3"
    onClick={onClick}
    options={{ width: { percent: 100 } }}
  />
);

ButtonStory3.story = {
  name: "with width override - percent"
};

export default {
  title: "Button (basics)",
  component: Button
};
