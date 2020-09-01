import styled from 'styled-components'; 
import NavLink from '../shared/NavLink'; 
// import { headerItem, wideFont, link, transition } from '../shared/helpers';

const HeaderNavLink = styled(NavLink)`


    position: relative; 
    cursor: pointer; 
    color: ${props => props.theme.mutedText};
    padding-top: 0.8rem;
    margin-right: 1rem;
    text-decoration: none;  

    ::after {
        

        content: ''; 
        position: absolute; 
        left: 0; 
        right: 0;
        bottom: 0; 
        opacity: 0;
        border-bottom: 1px solid ${props => props.theme.accent};
    }

    :hover::after {
        opacity: 1; 
    }

    &.active::after {
        left: 0; 
        right: 0; 
        bottom: 0; 
        border-bottom: 3px solid ${props => props.theme.accent}; 
    }
`;

export default HeaderNavLink;