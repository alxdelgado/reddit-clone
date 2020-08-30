import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import CategoryMenuDropdown from './Dropdown';
import CategoryMenuCreatePostButton from './CreatePostButton';

// Menu styled component; 
const Menu = styled.div`
    display: none; 
    border: 1px solid ${props => props.theme.border}; 
    border-left: none; 
    border-right: none;

    @media(max-width: 768px) {
        display: flex;
    }
`; 

// CategoryMenu 
export default function CategoryMenu(props) {
    <Menu>
        <Route
            path='a/:category'
            children={({ match, history }) => (
                <CategoryMenuDropdown
                    category={match ? match.params.category : 'all'}
                    history={history}
                />
            )}
        />
        {props.token && <CategoryMenuCreatePostButton />}
    </Menu>
};
