import { 
    BMC_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { };

//BmcFormReducer is a function that manages the creating, updating and editing bmc form 
//or each component 

//NOTE: remember dont return undefined state
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case BMC_FETCH_SUCCESS:
            //this is some es6 syntaxt
            //we get access to action name and pay load bu this syntax because 
            //we defined the action creator that way
            //console.log(action);
            return action.payload;//{ ...state, [action.payload.prop]: action.payload.value };
        
        default:
            return state;
    }
};