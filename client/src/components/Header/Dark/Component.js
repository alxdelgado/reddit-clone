import React from 'react'; 
import styled from 'styled-components';
import HeaderDarkButtonIcon from './Icon';

// dark button: turns to "dark theme";
const DarkButton = styled.span`
     

    padding: 0 8px; 
    cursor: pointer; 

    @media (hover: hover) {
        :hover path {
            fill: ${props => props.theme.accent};
        }
    }
`;

export default function HeaderDarkButton(props) {
    return (
        <DarkButton onClick={props.toggleDarkTheme}>
            <HeaderDarkButtonIcon />
        </DarkButton>
    )
}; 
