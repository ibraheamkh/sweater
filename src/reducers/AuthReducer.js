import { EMAIL_CHANGED, 
        PASSWORD_CHANGED,
        LOGIN_USER_SUCESS,
        LOGIN_USER_FAIL, 
        LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

//AuthReducer is a function that manages the auth state of the app 
//or each component 

//Here we define each auth state 

//TODO think of logged_in state and logged_out state

//NOTE: how we edit the appropriate state paramaters based on the case

//example if login success, loading goes, error clears

//while login state loading is true so spinner goes until request comes back

//NOTE: remember dont return undefined state
export default (state = INITIAL_STATE, action) => {
   // console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER: 
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        default:
            return state;
    }
};