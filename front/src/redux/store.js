import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import ReduxThunk from 'redux-thunk';

let store = createStore(
    allReducers,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
