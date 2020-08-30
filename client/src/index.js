import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store'; 
import * as serviceWorker from './serviceWorker';

// import containers; 
import AppContainer from './containers/AppContainer';
import App from './containers/app';

ReactDOM.render(
        <App />, 
    document.getElementById('root')
);

serviceWorker.unregister();