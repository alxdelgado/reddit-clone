// import dependencies;
import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch, Link, useParams, useRouteMatch } from 'react-router-dom';
import theme from '../theme';
import history from '../util/history';
import GlobalStyle from '../globalStyle';
import Home from '../components/Home/Home';
import Posts from '../components/Posts/Posts';
import PostDetails from '../components/PostDetails/PostDetails';
import Comment from '../components/Comments/Comment';
import Header from '../components/Header/Component';

export default function App(props) {
    // theme provider adds "dark theme" to the app; WIP - not functional yet. 
    
    return (
        
            <ThemeProvider theme={theme(props.dark)}>
                    <>
                        <Header/>
                        <GlobalStyle />
                        <div>
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/posts'>Hot Posts</Link>
                                </li>
                            </ul>




                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/posts' component={Posts} />
                                <Route path='/comments' component={Comment} />
                            </Switch>
                        </div>

                    </> 
            </ThemeProvider>
        
    )
}