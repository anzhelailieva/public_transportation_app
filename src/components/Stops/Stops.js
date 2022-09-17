import {
  StyledStopsComponent,
  StyledWrapper,
  IconContainer,
} from "./Stops.style";
import {
  StyledList,
  StyledListItem,
  StyledLink,
} from "../Main/pages/Lines/Lines.styled";
import Map from "../Map/Map";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../Image/Image";

export default function Stops() {
  const routesData = useSelector((state) => state.map.routes);
  const { id } = useParams();

  let route = {};
  let segmentsCoordinates = [];
  let stopsCoordinates = [];
  let stopsNames = [];
  const imgUrl = require("../../icons/bus-stop-icon.png");

  Object.entries(routesData).filter(([key, value]) => {
    if (routesData[key].id == id) {
       route = { ...routesData[key] };
    }
    return route;
  });

  const { segments, stops } = route;

  if (stops !== undefined && stops !== null) {
    stops.map((el) =>  stopsCoordinates.push(el.location));
    stops.map((el) => stopsNames.push(el.name));
  }

  if (segments !== undefined && segments !== null) {
    segments.map((el) =>  segmentsCoordinates.push(el.coordinates));
  }

  return (
    <StyledStopsComponent>
      <StyledWrapper>
        <StyledList>
          {stopsNames &&
            stopsNames.map((item, index) => {
              return (
                // it's not a good practice to have the index as key, but in this case is just for testing purposes
                <StyledListItem key={index}>
                  <StyledLink>
                    <IconContainer>
                      <Image src={imgUrl} alt={"bus-stop-icon"} />
                      <span>{item}</span>
                    </IconContainer>
                  </StyledLink>
                </StyledListItem>
              );
            })}
        </StyledList>
      </StyledWrapper>
      {stops && !!segmentsCoordinates && (
        <Map coordinates={stops} segments={segmentsCoordinates} />
      )}
    </StyledStopsComponent>
  );
}
