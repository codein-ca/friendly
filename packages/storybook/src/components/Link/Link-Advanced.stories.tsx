import React from "react";
import Link from "./";

export const LinkStory = () => <Link linkHREF="#" linkText="I am a link" />;

// NOTE: implement a more flexible Link
LinkStory.story = {
  name: "with Options passed (TBD)"
};

export default {
  title: "Links (advanced)",
  component: Link
};
