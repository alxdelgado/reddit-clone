import React from 'react'; 

import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { headerItem } from '../shared/helpers';

const Logo = styled(Link)`
    ${headeritem}; 

    margin-right: auto; 
    font-size: 24px; 
    font-weight: 500; 
    color: ${props.theme.normalText}; 
    text-decoratiob: none; 

    @media(max-width: 425px) {
        padding: 0 8px 0 16px; 
        font-size; 19px; 
    }
`;

const HeaderLogo = () => <Logo to='/'>Reddit</Logo>;

export default HeaderLogo; 
