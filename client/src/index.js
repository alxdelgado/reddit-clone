import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import * as serviceWorker from './serviceWorker';

// import components; 
import App from './containers/App';
import reducers from './redux/reducers';


const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

, document.getElementById('root')
);

serviceWorker.unregister();