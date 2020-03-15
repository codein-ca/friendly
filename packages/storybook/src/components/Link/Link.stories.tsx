import React from "react";
import Link from "./";

export const LinkStory1 = () => <Link linkHREF="#" linkText="I am a link" />;

LinkStory1.story = {
  name: "with text and url"
};
export const LinkStory2 = () => <Link linkHREF="" linkText="I am a link" />;

LinkStory2.story = {
  name: "with text but no url"
};
export const LinkStory3 = () => <Link linkHREF="#" linkText="" />;

LinkStory3.story = {
  name: "with no text but with url"
};

export default {
  title: "Links (basics)",
  component: Link
};
