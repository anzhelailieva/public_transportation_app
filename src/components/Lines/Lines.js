import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledLink,
} from "./Lines.styled";
import Filter from "../Filter/Filter"
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Icon from '../Icon/Icon.js'

export default function Lines() {
  const routes = useSelector((state) => state.map.filteredRoutes);
  const navigate = useNavigate();

  const handleChangeRoute = (id) => navigate(`/lines/${id}`);

  return (
    <StyledContainer>
      <Filter />
      <StyledList>
        {routes.map((item) => {
          return (
            <StyledListItem key={item.id}>
              <Icon iconType={item.transportType}></Icon>
              <StyledLink onClick={() => handleChangeRoute(item.id)}>
                {item.name}
              </StyledLink>
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
}
