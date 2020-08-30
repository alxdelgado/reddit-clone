import React from 'react';
import styled from 'styled-components'; 
import { Route } from 'react-router-dom';

// import styles; 
import HomePageSection from './Home.styles';

// import components; 
// import SideBarContainer from '../Sidebar/Container';


const Wrapper = styled.div`
    display: flex; 
    align-items: flex-start; 
    margin: 0 10vw; 

    @media (max-width: 1024px) {
        margin: 0 5vw; 
    }

    @media(max-width: 768px) {
        display: block; 
        margin: 0;
    }
`;

const Home = () => (
    <Wrapper>
        <HomePageSection>
            Yoo this is the home page! 
        </HomePageSection>
    </Wrapper>
); 

export default Home; 