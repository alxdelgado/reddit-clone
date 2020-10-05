import React, { useState, useEffect, Suspense } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'; 
import regeneratorRuntime from 'regenerator-runtime';
import styled from 'styled-components';
import { REDDIT_USER_AGENT, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_REFRESH_TOKEN } from 'babel-dotenv';


// import components;
import { fetchPosts } from '../../redux/actions';
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
function Posts() {

useEffect(() => {
    const data = fetchPosts();
}, []);

// helper function
// const renderPosts = () => {
//     return _.map((post, idx) => {
//         return 
//             <li key={idx}>
//                 <h3>{post.id}</h3> 
//             </li>
//     })
// }

    return (
        <Suspense fallback={Loading}>
            <Wrapper>
                
            </Wrapper>
        </Suspense>
    )

}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);