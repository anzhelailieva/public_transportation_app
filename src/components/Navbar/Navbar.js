import React from "react";
import { NavbarData } from "./NavbarData";
import { StyledNavbar, StyleList, StyleListItem, StyledLink} from "./Navbar.style";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyleList>
        {NavbarData.map((item, index) => {
          return (
            <StyleListItem key={index} className='nav-text'>
              <StyledLink to={item.path}>{item.icon}<span>{item.title}</span></StyledLink>
            </StyleListItem>
          );
        })}
      </StyleList>
    </StyledNavbar>
  );
}
