import React from "react";
import styled from "@emotion/styled";

type LinkType = {
  linkHREF: string;
  linkText: string;
};

const TooltipStyled = styled.span`
  //visibility: hidden;
  width: 120px;
  //background-color: rgba(138, 15, 15, 0.9);
  background-color: transparent;
  //color: #fff;
  color: transparent;
  //border: 1px solid black;
  border: none;
  //box-shadow: 0px -3px 3px black;
  box-shadow: none;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  top: 1.2em;
  z-index: 1;
  font-weight: bold;
  text-decoration: underline;
`;

const LinkStyled = styled.a`
  text-decoration: none;
  background-color: rgba(221, 206, 29, 0.25);
  box-shadow: 0 0 0.5em rgba(221, 206, 29, 0.5);
  padding: 0 0.5em;
  color: black;
  white-space: pre;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: " 📌";
    font-size: x-small;
  }
  &:hover span:last-child {
    //visibility: visible;
    box-shadow: 0px -3px 3px black;
    border: 1px solid black;
    background-color: rgba(138, 15, 15, 0.9);
    color: #fff;
    font-size: xx-small;
    font-family: monospace;
  }
  & span:first-child {
    background-color: transparent;
  }
  & span:last-child {
    transition-duration: 800ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
  }
`;

const Link = ({ linkHREF, linkText }: LinkType) => {
  linkText = linkText ? linkText : "[link]";
  return (
    <LinkStyled href={linkHREF}>
      <span>{linkText}</span>
      <TooltipStyled>{linkHREF}</TooltipStyled>
    </LinkStyled>
  );
};

export default Link;
