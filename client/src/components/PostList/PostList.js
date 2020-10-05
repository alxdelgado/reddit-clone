import React, { Suspense } from 'react';
import styled from 'styled-components'; 
import { Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom';

// import components; 
import ErrorBoundary from '../../util/ErrorBoundary';

import Loading from '../../assets/loader.gif';
import PostDetails from '../PostDetails/PostDetails';

// styled components;
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

const RedditTitle = styled.h1`
    text-decoration: none;
    font-size: 1rem;  

`; 

export default function PostList({ props }) {
    // console.log("PostList -->", props);

    // let { path, url } = useRouteMatch();

    // having trouble dynamically routing a link to each post 
    // that takes the user to a view of the individual posts, comments, likes, etc. 
    // Docs: --> https://github.com/ReactTraining/react-router/blob/v0.13.6/doc/03%20Components/Link.md#params

    // console.log("PROPS", props)
    // console.log("ID", props.id);
    // const comments = fetchPostComments(props.id);
    // console.log("INSIDE POST LIST", comments);
    
    // const newArray = comments
    /// map over array and print each comment
    // link to an individual comment;


    return (
        <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
                <List>
                    <RedditTitle>{props.title}</RedditTitle>
                    <h5>{props.subreddit_name_prefixed}</h5>
                    <Link to={{
                        pathname: `/comments/${props.id}`
                    }}>
                        <button>More</button>
                    </Link>
                </List>
            </Suspense>
        </ErrorBoundary>
    )
}