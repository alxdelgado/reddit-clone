import React from 'react';
import styled from 'styled-components'; 

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

const RedditTitle = styled.h1`
    text-decoration: none;
    font-size: 1rem;  

`; 

export default function PostList(props) {
    console.log("PostList component -->", props);
    // TODO: figure out how to print the posts to the page; 
    return (
        <List>
            <RedditTitle>{props.props.title}</RedditTitle>
        </List>
    )
}