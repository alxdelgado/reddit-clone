// import dependencies;
import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch, Link, useParams, useRouteMatch } from 'react-router-dom';
import theme from '../theme';
import GlobalStyle from '../globalStyle';
import Home from '../components/Home/Home';
import Posts from '../components/Posts/Posts';
import Comment from '../components/Comments/Comment';
import Header from '../components/Header/Component';
import HeaderNavLink from '../components/Header/NavLink';

export default function App(props) {
    // theme provider adds "dark theme" to the app; WIP - not functional yet. 
    
    return (
        
            <ThemeProvider theme={theme(props.dark)}>
                    <>
                        <Header/>
                        <GlobalStyle />
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/posts' component={Posts} />
                                <Route path='/comments' component={Comment} />
                            </Switch>
                    </> 
            </ThemeProvider>
        
    )
}