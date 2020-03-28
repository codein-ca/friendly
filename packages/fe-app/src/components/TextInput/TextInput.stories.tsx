import React from "react";
import TextInput from ".";

const onChange = () => console.log("Typing...");

export const InputStory1 = () => (
  <TextInput name="Input1" label="Input #1" onChange={onChange} />
);
InputStory1.story = {
  name: "with name, label and onChange"
};

export const InputStory2 = () => (
  <TextInput
    name="Input2"
    label="Input #2"
    onChange={onChange}
    options={{ width: { em: 20 } }}
  />
);

InputStory2.story = {
  name: "also with width override - em"
};

export const InputStory3 = () => (
  <TextInput
    name="Input3"
    label="Input #3"
    onChange={onChange}
    options={{ width: { percent: 100 } }}
  />
);

InputStory3.story = {
  name: "with width override - percent"
};

export default {
  title: "Input (basics)",
  component: TextInput
};
