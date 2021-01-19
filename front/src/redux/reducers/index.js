import { combineReducers } from 'redux';
import loginModalReducer from './loginModal';
import loginReducer from './login';

const allReducers = combineReducers({
    loginModalReducer,
    login: loginReducer 
});

export default allReducers;