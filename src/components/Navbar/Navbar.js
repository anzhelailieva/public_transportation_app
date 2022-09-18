import {
  StyledNavbar,
  StyleList,
  StyleListItem,
  StyledLink,
  StyledHeader,
} from "./Navbar.style";
import { NavbarData } from "./NavbarData";
import React from "react";
import Title from '../Title'

export default function Navbar() {
  return (
    <StyledHeader>
      <Title title={'Theoremus'}></Title>
      <StyledNavbar>
        <StyleList>
          {NavbarData.map((item, index) => {
            return (
              <StyleListItem key={index} className="nav-text">
                <StyledLink to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </StyledLink>
              </StyleListItem>
            );
          })}
        </StyleList>
      </StyledNavbar>
    </StyledHeader>
  );
}
