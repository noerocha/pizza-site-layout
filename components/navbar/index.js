import React from "react";
import { Nav, NextLink, NavIcon, Bars } from "./styles";

const NavBar = ({ toggle }) => {
  return (
    <Nav>
      <NextLink href="/pizza">Pizza</NextLink>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
};

export default NavBar;
