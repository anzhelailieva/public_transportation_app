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
import Image from "../Image/Image";
import Map from "../Map/Map";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Stops() {
  const routes = useSelector((state) => state.map.filteredRoutes);
  const { id } = useParams();
  const imgUrl = require("../../icons/bus-stop-icon.png");
  let stopsNames = [];
  let routesDataItems = [];

  Object.entries(routes).filter(([key, value]) => {
    if (routes[key].id == id) {
      return routesDataItems = [{
        routeId: routes[key].id,
        segments: routes[key].segments.map((item) => item.coordinates),
        stops: routes[key].stops
      }]
    };
  });

  if (routesDataItems[0].stops !== undefined && routesDataItems[0].stops !== null) {
    routesDataItems[0].stops.map((el) => stopsNames.push(el.name));
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
      { (
        <Map stops={routesDataItems.stops} routesDataItems={routesDataItems} />
      )}
    </StyledStopsComponent>
  );
}
