import React, { useState, useEffect, Suspense } from 'react'; 
import regeneratorRuntime from 'regenerator-runtime';
import styled from 'styled-components';

import { REDDIT_USER_AGENT, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_REFRESH_TOKEN } from 'babel-dotenv';


// import components; 
import PostList from '../PostList/PostList';
import Loading from '../../assets/loader.gif';


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

// fetch all "hot" posts; 
export default function Posts(props) {
    console.log("Posts -->", props);

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

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
        // write the async function to fetch the data;
        
        
        const getRedditHot = async () => {
            if (error) {
                setError(true); 
            } else {
                setError(false);
                let response = await r.getHot('wec');
                const posts = response; 
                setPosts(posts);
                // console.log("getRedditHot -->", posts);
            }
        }   

        getRedditHot();
        // console.log("getRedditHot end of useEffect -->", posts); 
    }, []);

    console.log("getRedditHot outside useEffect -->", posts);

    return (
        <Suspense fallback={Loading}>
            <Wrapper>
                {posts.map((post, idx, ...otherPostProps) => {
                        return <PostList key={idx} props={post} {...otherPostProps} />
                })}
            </Wrapper>
        </Suspense>
    )
    
};
