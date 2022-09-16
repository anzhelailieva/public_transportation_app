import styled from "styled-components";

export const StyledStopsComponent = styled.div`
  width: 100%;
  display: flex;

  span {
    cursor: default;
  }
`;

export const StyledWrapper = styled.div`
  overflow: auto;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;

    img {
        width: 25px;
        height: 25px;
        margin-right: 1rem;  
    }
`;
