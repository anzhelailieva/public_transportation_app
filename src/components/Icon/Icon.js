import { FILTERS, TYPES } from "../../shared/CONSTANT";
import { IconContainer } from "./Icon.style";
import React from "react";
import PropTypes from "prop-types";

export default function Icon({ iconType }) {
  const getType = (type) => {
    switch (type) {
      case FILTERS.A:
        return (
          <img src={require("../../icons/bus-icon.png")} alt={`icon-${type}`} />
        );
      case FILTERS.TB:
        return (
          <img
            src={require("../../icons/tram-icon.png")}
            alt={`icon-${type}`}
          />
        );
      case FILTERS.TM:
        return (
          <img
            src={require("../../icons/metro_icon.png")}
            alt={`icon-${type}`}
          />
        );
      case TYPES.STOP:
        return (
          <img
            src={require("../../icons/bus-stop-icon.png")}
            alt={`icon-${type}`}
          />
        );
      case TYPES.GOBACK:
        return (
          <img
            src={require("../../icons/arrow-left.png")}
            alt={`icon-${type}`}
          />
        );
      default:
        return null;
    }
  };

  return <IconContainer>{getType(iconType)}</IconContainer>;
}

Icon.propTypes = {
  iconType: PropTypes.string.isRequired,
};
