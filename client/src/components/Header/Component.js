import React from 'react';
import styled from 'styled-components'; 
import HeaderLogo from './Logo'; 
// import HeaderDarkButtonContainer from './Dark/Container';
import HeaderUsername from './Username/index';
import HeaderNavLink from './NavLink';

const Wrapper = styled.header`
    position: sticky; 
    z-index: 10; 
    top: 0; 
    display: flex; 
    align-items: stretch; 
    margin-bottom: 24px; 
    box-shadow: 0 4px 12px ${props => props.theme.shadow}; 
    border-bottom: 1px solid ${props => props.theme.border};
    height: 48px; 
    padding: 0 10vw; 
    background-color: ${props => props.theme.foreground}; 
    user-select: none;

    @media (max-width: 425px) {
        margin-bottom: 16px; 
        height: 40px;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export default function Header({ user, logout }) {
    return (
        <Wrapper>
            <HeaderLogo />
            <>
                <HeaderNavLink to='/'>Home</HeaderNavLink>
                <HeaderNavLink to='/posts'>Hot Posts</HeaderNavLink>

            </>
            {/* <HeaderDarkButtonContainer />
            {user ? (
                <>
                    <HeaderUsername username={user.username} />
                    <HeaderNavLink as='span' onClick={logout}>
                        log out 
                    </HeaderNavLink>
                </>
            ) : (
                <>
                    <HeaderNavLink to='/login'>log in</HeaderNavLink>
                    <HeaderNavLink to='/signup'>sign up</HeaderNavLink>
                </>
            )} */}
        </Wrapper>
    );
}; 
