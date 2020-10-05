// import React, { useState, useEffect } from 'react'; 

// import { REDDIT_USER_AGENT, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_REFRESH_TOKEN } from 'babel-dotenv';


// export default function fetchHotPosts() {

//     const [posts, setPosts] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // snoowrap api wrapper;
//         // Docs: --> https://not-an-aardvark.github.io/snoowrap/index.html
//         const snoowrap = require('snoowrap');
//         // creating the snoowrap requester with OAuth credentials;
//         const r = new snoowrap({
//             userAgent: REDDIT_USER_AGENT,
//             clientId: REDDIT_CLIENT_ID,
//             clientSecret: REDDIT_CLIENT_SECRET, 
//             refreshToken: REDDIT_REFRESH_TOKEN,
//         });
        
//         // fetch all "hot" posts; 
//         // docs: https://github.com/not-an-aardvark/snoowrap
//         // write the async function to fetch the data;  
//         const getRedditHot = async () => {
//             if (error) {
//                 setError(true); 
//             } else {
//                 setError(false);
//                 let response = await r.getHot('wec');
//                 const posts = response; 
//                 setPosts(posts);
//                 // console.log("getRedditHot -->", posts);
//             }
//         }   

//         getRedditHot();
//         // console.log("getRedditHot end of useEffect -->", posts); 
//     }, []);

//     console.log("FETCHPOSTS -->", posts);
    
//     return posts;

// }
