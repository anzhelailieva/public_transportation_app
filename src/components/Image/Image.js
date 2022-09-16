import {ImageContainer} from './Image.style'
import React from 'react';
import PropTypes from "prop-types";

export default function Image({src}) {
  return (
    <ImageContainer>
        <img src={src} alt='text'/>
    </ImageContainer>
  )
}

Image.propTypes = {
   src: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired, 
};
