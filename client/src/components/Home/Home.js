import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import styled from 'styled-components'; 
import { Route } from 'react-router-dom';

// import styles; 
import HomePageSection from './Home.styles';

// import components; 
// import SideBarContainer from '../Sidebar/Container';
import Posts from '../Posts/Posts';
import Header from '../Header/Component';


const Wrapper = styled.div`
    align-items: flex-start; 
    margin: 0 10vw; 

    @media (max-width: 1024px) {
        display: block;
        margin: 0 5vw; 
    }

    @media(max-width: 768px) {
        display: block; 
        margin: 0;
    }
`;

export default function Home(props) {
    console.log("Home Page component -->", props)

    return (
        <Wrapper>
            <HomePageSection>
            <Header />
                Yoo this is the home page!
                <Posts />
            </HomePageSection>
        </Wrapper>
    )
}