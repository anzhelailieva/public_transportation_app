import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #A2C3A2;
    padding: 0 2rem;
`;

export const StyledLink = styled(Link)`
    display: block;    
    text-decoration: none;
    color: white;
    text-transform: uppercase;
`;