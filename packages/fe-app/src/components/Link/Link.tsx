import React from "react";
import styled from "@emotion/styled";

type LinkType = {
  linkHREF: string;
  linkText: string;
};

const LinkStyled = styled.a`
  text-decoration: none;
  background-color: rgba(221, 206, 29, 0.25);
  box-shadow: 0 0 0.5em rgba(221, 206, 29, 0.5);
  padding: 0 0.5em;
  color: fuchsia;
  white-space: pre;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: " 📌";
    font-size: x-small;
  }
`;

const Link = ({ linkHREF, linkText }: LinkType) => {
  linkText = linkText ? linkText : "[link]";
  return <LinkStyled href={linkHREF}>{linkText}</LinkStyled>;
};

export default Link;
