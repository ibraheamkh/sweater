import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BmcFormReducer from './BmcFormReducer';
import BmcReducer from './BmcReducer';

//each reducer represent some state in the application
//here we map each reducer with the variable name in 
//which it will be available in the component

export default combineReducers({
    auth: AuthReducer,
    bmcForm: BmcFormReducer,
    bmcList: BmcReducer
});
