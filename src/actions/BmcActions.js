import firebase from 'firebase';
import { 
    BMC_UPDATE,
    BMC_CREATE, 
    BMC_FETCH_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';

//remember action creators must retrurn actions

// Here we handle crating actions for bmc related action
// remember bmc is our Model right now 

//instead of creating too many action creators
//we create this one to handle all actoin creations

//prop maybe any bmc prop eg : problem, name, activites etc
//value is the new value of that property
export const bmcUpdate = ({ prop, value }) => {
    return {
        type: BMC_UPDATE,
        payload: { prop, value }
    };
};

export const bmcCreate = ({ name, problem, customersSegments }) => {

    //we get our current user from firebase
    //TODO: change firebase 
    const { currentUser } = firebase.auth();
    //
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/bizModels`)
        .push({ name, problem, customersSegments })
        //we use Actions.pop() to return the previous view
        .then(() => {
            dispatch({ type: BMC_CREATE });
            Actions.pop();
        });    
    };
};

export const bmcFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/bizModels`)
        .on('value', response => { 
            dispatch({ type: BMC_FETCH_SUCCESS, payload: response.val() });
        });
    };
};
