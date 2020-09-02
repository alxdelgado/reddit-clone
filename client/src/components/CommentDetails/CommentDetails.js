import React from 'react'; 
import styled from 'styled-components'; 


//styled components;
const List = styled.ul`
    list-style: none; 
    border: 1px solid ${props => props.theme.border}; 
    border-radius: 5px;

    @media (max-width: 768px) {
        border-top: none; 
        border-left: none; 
        border-right: none; 
        border-radius: 0; 
    }
`;

export default function CommentDetails(props) {
    console.log("Comment Details -->", props);
    return (
        <>
            <List>
                <h2>{props.props.link_title}</h2>
                <h5>{props.props.link_author}</h5>
                <p>{props.props.body}</p>
            </List>
        </>
    )
}; 
