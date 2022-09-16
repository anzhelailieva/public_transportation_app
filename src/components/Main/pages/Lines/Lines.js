import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledLink,
} from "./Lines.styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import Image from "../../../Image/Image";

export default function Lines() {
  const routes = useSelector((state) => state.map.routes);
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
