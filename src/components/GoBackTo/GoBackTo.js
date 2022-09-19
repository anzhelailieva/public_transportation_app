import { StyledGoBackLinkContainer, StyledGoBackLink } from "./GoBackTo.style";
import React from "react";
import PropTypes from "prop-types";

export default function GoBackTo({ path, text, children }) {
  return (
    <StyledGoBackLinkContainer>
      {children && children}
      <StyledGoBackLink to={path}>{text}</StyledGoBackLink>
    </StyledGoBackLinkContainer>
  );
}

GoBackTo.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
