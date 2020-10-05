import React, { useState, useEffect } from 'react'; 

import { REDDIT_USER_AGENT, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_REFRESH_TOKEN } from 'babel-dotenv';


export default function fetchPostComments(id) {

    const [comments, setComments] = useState([]);
    const [error, setError] = useState(false);

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
        const getRedditComments = async () => {
            if (error) {
                setError(true); 
            } else {
                setError(false);
                let response = await r.getContentByIds([r.getSubmission(`${id}`)]).comments.fetchAll();
                const comments = response; 
                setComments(comments);
                // console.log("getRedditHot -->", posts);
            }
        }   

        getRedditComments();
        // console.log("getRedditHot end of useEffect -->", posts); 
    }, []);

    // console.log("FETCHPOSTCOMMENTS", comments);
    
    return comments;

}
