import {
  StyledNavbar,
  StyleList,
  StyleListItem,
  StyledLink,
} from "./Navbar.style";
import { NavbarData } from "./NavbarData";
import React from "react";

export default function Navbar() {
  return (
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
  );
}