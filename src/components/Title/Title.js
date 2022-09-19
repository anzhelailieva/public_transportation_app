import React from 'react'
import PropTypes from "prop-types";
import {StyledTitle} from './Title.style'

export default function Title({title}) {
  return (
    <StyledTitle>{title}</StyledTitle>
  )
}

Title.propTypes = {
    title: PropTypes.string
  };
