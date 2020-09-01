import React from 'react';
import styled from 'styled-components';
import HeaderNavLink from '../NavLink';
import HeaderUsernameText from './Username.styles';

const Wrapper = styled(HeaderNavLink)`
    flex-shrink: 1;
    border-left: 1px solid ${props => props.theme.border}; 
    border-right: 1px solid ${props => props.theme.border};
    min-width: 0;
`;

export default function HeaderUsername(props) {
    return (
        <Wrapper to={`/u/${props.username}`}>
            <HeaderUsernameText>{props.username}</HeaderUsernameText>
        </Wrapper>
    )
};



