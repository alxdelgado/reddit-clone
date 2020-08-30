import React from 'react';
import styled from 'styled-components/macro'; 

// styled wrapper
const List = styled.ul`
    list-style: none; 
    border: 1px solid ${props => props.theme.border}; 
    border-radius: 2px; 

    @media (max-width: 768px) {
        border-top: none; 
        border-left: none; 
        border-right: none; 
        border-radius: 0; 
    }
`;

export default function PostList(props) {
    console.log(props);

    return (

    )
}