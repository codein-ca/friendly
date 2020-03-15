import React from "react";
type LinkType = {
  linkHREF: string;
  linkText: string;
};

const Link = ({ linkHREF, linkText }: LinkType) => {
  linkText = linkText ? linkText : "[link]";
  return <a href={linkHREF}>{linkText}</a>;
};

export default Link;
