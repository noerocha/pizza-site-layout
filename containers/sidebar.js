import React from "react";
import SideBar from "../components/sidebar";

const SideBarContainer = ({ isOpen, toggle }) => {
  return (
    <SideBar isOpen={isOpen}>
      <SideBar.Icon onClick={toggle}>
        <SideBar.CloseIcon />
      </SideBar.Icon>
      <SideBar.SidebarMenu>
        <SideBar.SidebarLink href="/pizza">Pizzas</SideBar.SidebarLink>
        <SideBar.SidebarLink href="/pizza">Desserts</SideBar.SidebarLink>
        <SideBar.SidebarLink href="/pizza">Full Menu</SideBar.SidebarLink>
      </SideBar.SidebarMenu>
      <SideBar.SideBtnWrap>
        <SideBar.SidebarBtnLink href="/order">Order Now</SideBar.SidebarBtnLink>
      </SideBar.SideBtnWrap>
    </SideBar>
  );
};

export default SideBarContainer;
