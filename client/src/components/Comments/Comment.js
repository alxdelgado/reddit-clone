import React, { useState, useEffect } from 'react';
import regeneratorRuntime from 'regenerator-runtime'; 
import styled from 'styled-components';

// import components; 
import fetchPostComments from '../../lib/fetchPostComments';
import { sortData } from '../../util/sort';

// styled component;
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

export default function Comment({ id, ...props }) {

    const comment = fetchPostComments();
    console.log(comment);

    return (
        <Wrapper>
            Comment Page
        </Wrapper>
        
    )
}; 
