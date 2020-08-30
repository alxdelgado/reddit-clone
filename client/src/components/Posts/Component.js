import React { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import regeneratorRuntime from 'regeneratorRuntime'; 
import styled from 'styled-components/macro';

// import components; 
import PostList from '../PostList/PostList';


// styled wrapper; 
const Wrapper = style.div`
    display: flex; 
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

use strict;
// fetch all "hot" posts; 
export default function Posts(props) {
    // snoowrap api wrapper;
    // !! trying my best to understand snoowrap on the first go - may or may not be using this right; 
    const snoowrap = require('snoowrap');
    const fetch = new snoowrap({
        clientId: process.env.REDDIT_CLIENT_ID,
        clientSecret: process.env.REDDIT_CLIENT_SECRET, 
        refreshToken: process.env.REDDIT_REFRESH_TOKEN
    })

    // fetch all "hot" posts; 
    const data = fetch.getHot().then(res => res.json());

    return (
        <Wrapper>
            {data.map((post, idx) => {
                return <PostList key={post} props={...props} />
            })}
        </Wrapper>
    )
}

