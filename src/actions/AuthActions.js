import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, 
        PASSWORD_CHANGED,
        LOGIN_USER_SUCESS,
        LOGIN_USER_FAIL,
        LOGIN_USER
} from './types';

//---REDUX-----
//Here we define our action creators
//Action Creator is a fucntion that creates the action for the reducer
//Thunk returns function from action creator

//-----Flex Router-------
//Flex-Router Actions are: 
//We need to tell the action creator if we need to navigate to a new scene
//One possible way of navigating is after an action is created


//this fucntion creates an mobile changed action
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

//Thunk example returning federal funtion () => {};
export const loginUser = ({ email, password }) => {
    //Here we make http call using firebase + handling promise errors
    //important to unserstad
    return (dispatch) => {
            //first we dispatch a login action manually : dispatch mean fire action creator
            dispatch({ type: LOGIN_USER });

            //making the request
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => { // handle sucess request 
                  //  console.log(user);
                loginUserSuccess(dispatch, user);
            })
            .catch((resp) => { // handle failed request
               // console.log('Request Failed' + resp);
                loginUserFail(dispatch);
            });
    }; 
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCESS, payload: user });

    //when the user sucess in loging in
    //we use Flux-Router Actions to navigate 
    //we navigate to main because it is the root of protected Scenes
    Actions.main();
};

