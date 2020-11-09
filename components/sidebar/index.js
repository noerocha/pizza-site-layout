import React from "react";
import {
  Container,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarBtnLink,
} from "./styles";

const SideBar = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

SideBar.Icon = ({ children, ...restProps }) => {
  return <Icon {...restProps}>{children}</Icon>;
};

SideBar.CloseIcon = ({ children, ...restProps }) => {
  return <CloseIcon {...restProps}>{children}</CloseIcon>;
};

SideBar.SidebarMenu = ({ children, ...restProps }) => {
  return <SidebarMenu {...restProps}>{children}</SidebarMenu>;
};

SideBar.SidebarLink = ({ children, ...restProps }) => {
  return <SidebarLink {...restProps}>{children}</SidebarLink>;
};

SideBar.SideBtnWrap = ({ children, ...restProps }) => {
  return <SideBtnWrap {...restProps}>{children}</SideBtnWrap>;
};

SideBar.SidebarBtnLink = ({ children, ...restProps }) => {
  return <SidebarBtnLink {...restProps}>{children}</SidebarBtnLink>;
};

export default SideBar;
