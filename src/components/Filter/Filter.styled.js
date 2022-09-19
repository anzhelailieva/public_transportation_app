import styled from "styled-components";

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;    
    background-color: #ecf0f1;
    padding: .5rem;
`;

export const StyledButton = styled.button`
    background: none;
    border: none;
    color: #6c6d6d;
    height: 2rem;
    width: auto;
    text-transform: uppercase;
    cursor: pointer;

    &:visited {
        color: #A2C3A2;
        transition: all 100ms linear;
	}
`;