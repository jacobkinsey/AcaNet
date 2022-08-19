import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import stylingReducer from './stylingReducer';

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    auth: authReducer,
    style: stylingReducer
});