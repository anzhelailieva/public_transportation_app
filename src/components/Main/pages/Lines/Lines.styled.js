import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 30%;
`;

export const StyledList = styled.ul`
    margin: 0 0 3rem 0;
    padding: 1rem;
`;

export const StyledListItem = styled.li`
    list-style: none;
    padding: .3rem;
    border-bottom: 1px solid #6c6d6d;
    display: flex;
    align-items: center;
    
	&:hover {
        background-color: rgba(162, 195, 162, .6);
        transition: background-color 100ms linear;
	}
    
`;

export const StyledLink = styled.span`
    display: block;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
`;
