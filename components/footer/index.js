import React from "react";
import {
  Container,
  Wrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./styles";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Wrapper = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.SocialMedia = ({ children, ...restProps }) => {
  return <SocialMedia {...restProps}>{children}</SocialMedia>;
};

Footer.SocialMediaWrap = ({ children, ...restProps }) => {
  return <SocialMediaWrap {...restProps}>{children}</SocialMediaWrap>;
};

Footer.SocialLogo = ({ children, ...restProps }) => {
  return <SocialLogo {...restProps}>{children}</SocialLogo>;
};

Footer.SocialIcons = ({ children, ...restProps }) => {
  return <SocialIcons {...restProps}>{children}</SocialIcons>;
};

Footer.SocialIconLink = ({ children, ...restProps }) => {
  return <SocialIconLink {...restProps}>{children}</SocialIconLink>;
};

export default Footer;
