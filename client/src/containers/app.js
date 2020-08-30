// import dependencies;
import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import theme from '../theme';
import history from '../util/history';
import GlobalStyle from '../globalStyle';
// import HeaderContainer from '../Header/Container'; 
// import ErrorNotificationContainer from '../ErrorNotificationContainer';
// import LoginFormContainer from '../LoginForm/Container'; 
// import SignupFormContainer from '../SignupFormContainer'; 
// import CreatePostFormContainer from '../CreatePostForm/Container';
import Home from '../components/Home/Home';

export default function App(props) {
    // theme provider adds "dark theme" to the app;
    return (
        <ThemeProvider theme={theme(props.dark)}>
            <Router history={history}>
                <>
                    <GlobalStyle />
                    {/* <Route component={HeaderContainer} />
                    <Route component={ErrorNotificationContainer} /> */}
                    <Switch>
                        {/* <Route path='/login' component={LoginFormContainer} />
                        <Route path='/signup' component={SignupFormContainer} />
                        <Route path='/createpost' component={CreatePostFormContainer} /> */}
                        <Route path='/' component={Home} />
                    </Switch>
                </> 
            </Router>
        </ThemeProvider>
    )
}