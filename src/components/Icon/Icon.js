import {IconContainer} from './Icon.style'
import React from 'react';
import PropTypes from "prop-types";
import { FILTERS } from '../../shared/CONSTANT';
import { type } from '@testing-library/user-event/dist/type';

export default function Icon({transportType}) {

  const getType = (type) => {
    switch (type) {
      case FILTERS.A:
        return <img src={require("../../icons/bus-icon.png")}/>
      case FILTERS.TB:
        return <img src={require("../../icons/tram-icon.png")}/>
        case FILTERS.TM:
          return <img src={require("../../icons/metro_icon.png")}/>
      default:
        return null;
    }
  }

  return (
    <IconContainer>{getType(transportType)}</IconContainer>
  )
}

Icon.propTypes = {
  transportType: PropTypes.string.isRequired,
};
