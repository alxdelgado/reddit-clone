import React, { useState, useEffect } from 'react';
import regeneratorRuntime from 'regenerator-runtime'; 
import styled from 'styled-components';

// import components; 
import CommentList from '../CommentList/CommentList';
import { sortData } from '../../util/sort';
// import env var;
import { REDDIT_USER_AGENT, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_REFRESH_TOKEN } from 'babel-dotenv';

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

export default function Comment(props) {
    console.log("Comment component -->", props);

    const [comments, setComments] = useState([]);
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

        // fetch all "comments" of a subreddit post; 
        // docs: https://github.com/not-an-aardvark/snoowrap
        // write the async function to fetch the data;

        const getRedditComments = async () => {
            if (error) {
                setLoading(true);
                setError(true);
            } else {
                setError(false);
                setLoading(false);
                let response = await r.getSubreddit('wec').getNewComments();
                const sortedData = sortData(response); 
                const comments = sortedData; 
                setComments(comments); 
                // console.log("getRedditComments -->", comments);
            }

        }

        getRedditComments();
    }, []); 

    console.log(" getRedditCommments outside useEffect -->", comments);

    return (
        <Wrapper>
            <CommentList props={comments} />
        </Wrapper>
    )
}