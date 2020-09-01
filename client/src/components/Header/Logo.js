import React from 'react'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Logo = styled(Link)`

    padding-top: 0.5rem;
    padding-left: 0.5rem;
    margin-right: auto; 
    font-size: 24px; 
    font-weight: 500; 
    color: black;
    text-decoration: none; 

    @media(max-width: 425px) {
        padding: 0 8px 0 16px; 
        font-size; 19px; 
    }
`;

const HeaderLogo = () => <Logo to='/'>Reddit</Logo>

export default HeaderLogo;
