import styled from "styled-components";

export const StyledContainer = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    overflow: auto;

    img {
        width: 80px;
        height: 80px;
        margin-right: 1rem;  
    }
`;

export const StyledList = styled.ul`
    margin: 0 0 3rem 0;
    padding: 2rem 1rem;
`;

export const StyledListItem = styled.li`
    list-style: none;
    padding: 1rem;
    text-align: center;
    
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
