import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Button from '../shared/button';

const CreatePostButton = styled(button)`
    display: flex;
`; 

export default function CreatePostButton() {
    return (
        <CreatePostButton as={Link} to='/createpost'>create post</CreatePostButton>
    )
};