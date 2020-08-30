import React from 'react'; 
import styled from 'styled-components/macro';
import { headerItem } from '../../shared/helpers';
import HeaderDarkButton from './Icon';

// dark button: turns to "dark theme";
const DarkButton = styled.span`
    ${headerItem}; 

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
            <HeaderDarkButton />
        <DarkButton>
    )
}; 
