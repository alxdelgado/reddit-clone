import React from 'react'; 
import styled from 'styled-components';

// import components; 
import CommentDetails from '../CommentDetails/CommentDetails';

// error handling; 
import ErrorBoundary from '../../util/ErrorBoundary';


export default function CommentList(props) {
    // console.log("CommentList -->", props);
    return (
        <ErrorBoundary>
            {props.props.map((comment, idx, ...otherCommentProps) => {
                return <CommentDetails key={idx} props={comment} {...otherCommentProps} />
            })}
        </ErrorBoundary>
    )
}