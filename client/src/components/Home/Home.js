import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import styled from 'styled-components'; 
import { Route, Switch } from 'react-router-dom';

// import styles; 
import HomePageSection from './Home.styles';

// import components; 
// import SideBarContainer from '../Sidebar/Container';
import Header from '../Header/Component';


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

export default function Home(props) {
    console.log("Home Page component -->", props)



    return (
        <Wrapper>
            <HomePageSection>
                HOME PAGE
            </HomePageSection>
        </Wrapper>
    )
}