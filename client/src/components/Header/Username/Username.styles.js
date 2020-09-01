import styled from 'styled-components';
// import { wideFont } from '../../shared/helpers';

const HeaderUsernameText = styled.span`


    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${props => props.theme.mutedText};
`; 

export default HeaderUsernameText;