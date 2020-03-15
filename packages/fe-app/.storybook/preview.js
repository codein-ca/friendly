import { addParameters } from "@storybook/react"; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: "some darker gray", value: "#333" },
    { name: "clearly white", value: "whitesmoke", default: true },
    { name: "super pink", value: "hotpink" }
  ]
});
