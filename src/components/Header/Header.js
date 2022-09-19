import { StyledHeader, StyledLink } from "./Header.style";
import React from "react";
import Title from "../Title";

export default function Header() {
  return (
    <StyledHeader>
        <StyledLink to={'/'}>
        <Title title={"Some title"}></Title>
        </StyledLink>
    </StyledHeader>
  );
}
