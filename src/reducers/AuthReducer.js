import { MOBILE_CHANGED } from '../actions/types';

const INITIAL_STATE = { mobile: '' };
//NOTE: remember dont return undefined state
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOBILE_CHANGED:
            return state;
        default:
            return state;
    }
};