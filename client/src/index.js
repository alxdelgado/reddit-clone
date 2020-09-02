import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import * as serviceWorker from './serviceWorker';

// import components; 
import App from './containers/App';

ReactDOM.render(

    // <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </Provider>

, document.getElementById('root')
);

serviceWorker.unregister();