import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import regeneratorRuntime from 'regenerator-runtime';
import styled from 'styled-components';

import { REDDIT_USER_AGENT, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_REFRESH_TOKEN } from 'babel-dotenv';


// styled wrapper; 
const Wrapper = styled.div`
 
    align-items: center; 
    margin: 0 10vw; 
    @media (max-width: 1024px) {
        margin: 0 5vw; 
    }
    @media (max-width: 768px) {
        display: block;
        margin: 0; 
    }
`;

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


export default function PostDetails({ props }) {
    console.log("POSTDETAILS -->", props);

    
    return (
            <Wrapper>
                <List key={idx}>
  
                </List>
            </Wrapper>
        
    )
}; 

