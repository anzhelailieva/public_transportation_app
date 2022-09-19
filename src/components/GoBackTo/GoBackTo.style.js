import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledGoBackLinkContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledGoBackLink = styled(Link)`
    display: block;    
    text-decoration: none;
    color: black;

`;