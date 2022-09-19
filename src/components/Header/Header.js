import { StyledHeader, StyledLink } from "./Header.style";
import React from "react";
import Title from "../Title";

export default function Header() {
  return (
    <StyledHeader>
        <StyledLink to={'/'}>
        <Title title={"Theorebus =)"}></Title>
        </StyledLink>
    </StyledHeader>
  );
}
