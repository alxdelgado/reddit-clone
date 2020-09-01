import styled from 'styled-components'; 
import { NavLink as RouterNavLink } from 'react-router-dom'; 

const activeClassName = 'active'; 

const NavLink = styled(RouterNavLink).attrs({ activeClassName })`
    
    position: relative; 

    ::after {
        content: '', 
        position: absolute; 
        opacity: 0; 
    }

    $.${activeClassName} {
        background-color: ${props => props.theme.activeBackground}; 

        ::after {
            opacity: 1;
        }
    }
`;

export default NavLink;