import { createBrowserHistory } from 'history';
import store from '../store';


const history = createBrowserHistory();

history.listen(() => {
    if (store.getState().error) store.dispatch(hideErrorClearTimeout()); 
}); 

export default history;