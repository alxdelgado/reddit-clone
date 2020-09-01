import React, { useState, useEffect } from 'react'; 
import regeneratorRuntime from 'regenerator-runtime';
import styled from 'styled-components';

import { REDDIT_USER_AGENT, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_REFRESH_TOKEN } from 'babel-dotenv';


// import components; 
import PostList from '../PostList/PostList';


// styled wrapper; 
const Wrapper = styled.div`
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

// fetch all "hot" posts; 
export default function Posts(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => { 
        // snoowrap api wrapper;
        // Docs: --> https://not-an-aardvark.github.io/snoowrap/index.html
        const snoowrap = require('snoowrap');
        // creating the snoowrap requester with OAuth credentials;
        const r = new snoowrap({
            userAgent: REDDIT_USER_AGENT,
            clientId: REDDIT_CLIENT_ID,
            clientSecret: REDDIT_CLIENT_SECRET, 
            refreshToken: REDDIT_REFRESH_TOKEN,
        });
        
        // fetch all "hot" posts; 
        // docs: https://github.com/not-an-aardvark/snoowrap
        // write the async function to fetch the data 
        // then pass it through to the HTML;
        const getRedditHot = async () => {
            let response = await r.getHot();
            const posts = response; 
            setPosts(posts);
            console.log(posts);
        } 

        let getData = getRedditHot();
        console.log(getData)
    }, []);

    return (
        <Wrapper>
            {posts.map((post, idx) => {
                return <PostList key={idx} props={post} />
            })}
        </Wrapper>
    )
    
};

