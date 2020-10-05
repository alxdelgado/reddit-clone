import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

import { REDDIT_USER_AGENT, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_REFRESH_TOKEN } from 'babel-dotenv';

export const FETCH_POSTS = 'fetch_posts'; 

export function fetchPosts() {

    // REFACTOR USEEFFECT TO USE AXIOS INSTEAD - THEN JUST FETCH THE R.GETHOT METHOD FROM SNOOWRAP 
    const snoowrap = require('snoowrap');
    // creating the snoowrap requester with OAuth credentials;
    const r = new snoowrap({
        userAgent: REDDIT_USER_AGENT,
        clientId: REDDIT_CLIENT_ID,
        clientSecret: REDDIT_CLIENT_SECRET, 
        refreshToken: REDDIT_REFRESH_TOKEN,
    });

    const POSTS_ENDPOINT = r.getHot('wec');
    console.log("POSTS ENDPOINT >>> ", POSTS_ENDPOINT);

    const request = axios.get(`${POSTS_ENDPOINT}`)

    return {
        type: FETCH_POSTS,
        payload: request
    };
}