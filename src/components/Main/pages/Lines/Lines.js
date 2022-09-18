import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledLink,
} from "./Lines.styled";
import Image from "../../../Image/Image";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Lines() {
  const routes = useSelector((state) => state.map.filteredRoutes);
  const navigate = useNavigate();
  const imgUrl = require("../../../../icons/bus.png");

  const handleChangeRoute = (id) => navigate(`/lines/${id}`);

  return (
    <StyledContainer>
      <Image src={imgUrl} alt={"bus-icon"}></Image>
      <StyledList>
        {routes.map((item) => {
          return (
            <StyledListItem key={item.id}>
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
