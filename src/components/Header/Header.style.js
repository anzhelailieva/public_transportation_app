import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    display: block;    
    text-decoration: none;
    color: black;
    margin-left: 4rem;

`;