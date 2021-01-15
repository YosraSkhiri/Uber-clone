import { combineReducers } from 'redux';
import loginModalReducer from './loginModal';

const allReducers = combineReducers({
    loginModalReducer
});

export default allReducers;