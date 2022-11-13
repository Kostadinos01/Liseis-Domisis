import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./sidebarData";
import { useState } from "react";

import styled from "styled-components";

const Navbar = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  justify-content: start;
  align-items: center;
  height: 3.5rem;
  background-color: #a5c2be;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin-left: 2rem;
  color: #ffffff;
`;

const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
`;

const SidebarMenu = styled.div<{ close: boolean }>`
  width: 270px;
  height: 100vh;
  background-color: #a5c2be;
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? "0" : "-100%")};
  transition: 0.6s;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #a5c2be;
    width: 100%;
    height: 45px;
    text-align: center;
    justify-content: center;
    display: flex;
    border-radius: 5px;
    margin: 0 2rem;
  }
`;

const Sidebar: React.FunctionComponent = () => {
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);
  return (
    <>
      <Navbar>
        <MenuIconOpen to="#" onClick={showSidebar}>
          <FaIcons.FaBars />
        </MenuIconOpen>
        <Title>λυσεισ δομησησ</Title>
      </Navbar>

      <SidebarMenu close={close}>
        <MenuIconClose to="#" onClick={showSidebar}>
          <FaIcons.FaTimes />
        </MenuIconClose>

        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                {item.icon}
                <span style={{ marginLeft: "16px" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
