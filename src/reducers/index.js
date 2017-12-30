import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

//each reducer represent some state in the application 

export default combineReducers({
    auth: AuthReducer
});
