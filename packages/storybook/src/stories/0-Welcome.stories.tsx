import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default {
  title: "0 - Get started",
  component: Welcome
};

export const StorybookIntro = () => <Welcome showApp={linkTo("Button")} />;

StorybookIntro.story = {
  name: "Intro to Storybook",
  parameters: {
    backgrounds: [{ name: "red", value: "rgba(255, 0, 0)" }]
  }
};
