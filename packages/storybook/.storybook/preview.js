import { addParameters } from "@storybook/react"; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: "twitter", value: "#00aced", default: true },
    { name: "facebook", value: "#3b5998" }
  ]
});
