import React from "react";
import { useSelector } from "react-redux";
import {
  StyledLines,
  StyledLinesList,
  StyledLinesListItem,
  StyledLinesLink,
} from "./Lines.styled";
import { useNavigate } from "react-router-dom";

export default function Lines() {
  const routes = useSelector((state) => state.map.routes);
  const navigate = useNavigate();

  const handleChangeRoute = (id) => {
    navigate(`/lines/${id}`);
  };

  return (
    <StyledLines>
      <StyledLinesList>
        {routes.map(item => {
          return (
            <StyledLinesListItem key={item.id}>
              <StyledLinesLink onClick={()=>handleChangeRoute(item.id)}>
                <span>{item.name}</span>
              </StyledLinesLink>
            </StyledLinesListItem>
          );
        })}
      </StyledLinesList>
    </StyledLines>
  );
}
