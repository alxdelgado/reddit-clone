import React, { Suspense } from 'react';
import styled from 'styled-components'; 
import { Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom';

// import components; 
import ErrorBoundary from '../../util/ErrorBoundary';
import Loading from '../../assets/loader.gif';

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

export default function PostList(props) {
    // console.log("PostList -->", props);

    // let { path, url } = useRouteMatch();

    // having trouble dynamically routing a link to each post 
    // that takes the user to a view of the individual posts, comments, likes, etc. 

    return (
        <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
            <List>
                <h5>{props.props.subreddit_name_prefixed}</h5>
                <RedditTitle>{props.props.title}</RedditTitle>
                <img src={props.props.thumbnail}/>
                <li>
                    <Link to={`/comments/${props.props.comments._uri}`}>More</Link>
                </li>
            </List>
            </Suspense>
        </ErrorBoundary>
    )
}
