import { StyledStopsComponent, StyledWrapper } from "./Stops.style";
import { StyledList, StyledListItem, StyledLink } from "../Lines/Lines.styled";
import Map from "../Map/Map";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Icon from "../Icon";
import GoBackTo from "../GoBackTo";

export default function Stops() {
  const routes = useSelector((state) => state.map.filteredRoutes);
  const { id } = useParams();
  let stopsNames = [];
  let routesDataItems = [];

  Object.entries(routes).filter(([key, value]) => {
    if (routes[key].id == id) {
      return (routesDataItems = [
        {
          routeId: routes[key].id,
          routeName: routes[key].name,
          segments: routes[key].segments.map((item) => item.coordinates),
          stops: routes[key].stops,
          transportType: routes[key].transportType
        },
      ]);
    }
  });

  if (
    routesDataItems[0].stops !== undefined &&
    routesDataItems[0].stops !== null
  ) {
    routesDataItems[0].stops.map((el) => stopsNames.push(el.name));
  }

  return (
    <StyledStopsComponent>
      <StyledWrapper>
        <GoBackTo path={"/"} text={"Обратно към всички линии"} children={<Icon iconType={"goBack"}></Icon>}></GoBackTo>
        <Icon iconType={routesDataItems[0].transportType}></Icon>
        <h3>{routesDataItems[0].routeName}</h3>
        <StyledList>
          {stopsNames &&
            stopsNames.map((item, index) => {
              return (
                // it's not a good practice to have the index as key, but in this case is just for testing purposes
                <StyledListItem key={index}>
                  <Icon iconType={"stop"}></Icon>
                  <StyledLink>{item}</StyledLink>
                </StyledListItem>
              );
            })}
        </StyledList>
      </StyledWrapper>
      {<Map stops={routesDataItems.stops} routesDataItems={routesDataItems} />}
    </StyledStopsComponent>
  );
}
