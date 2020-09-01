// import dependencies;
import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import theme from '../theme';
import history from '../util/history';
import GlobalStyle from '../globalStyle';
import Home from '../components/Home/Home';

export default function App(props) {
    // theme provider adds "dark theme" to the app; WIP - not functional yet. 
    return (
        <ThemeProvider theme={theme(props.dark)}>
            <Router history={history}>
                <>
                    <GlobalStyle />
                    <Switch>
                        <Route path='/' component={Home} />
                    </Switch>
                </> 
            </Router>
        </ThemeProvider>
    )
}