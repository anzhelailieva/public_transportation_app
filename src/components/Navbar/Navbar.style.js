import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
`;

export const StyledNavbar = styled.nav`
    background-color: white;
`;

export const StyleList = styled.ul`
    padding: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const StyleListItem = styled.li`
    list-style: none;
 
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    text-transform: uppercase;

    &:active,
    &:focus {
        color: #A2C3A2;
	}

    &:hover {
        color: #A2C3A2;
        transition: color 100ms linear;
	}
`;
