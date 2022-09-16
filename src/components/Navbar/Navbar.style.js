import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
    width: 100%;
    background-color: white;
    border-bottom: 1px solid black;
`;

export const StyleList = styled.ul`
    padding: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const StyleListItem = styled.li`
    list-style: none;
    margin-left: 3rem;
 
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
