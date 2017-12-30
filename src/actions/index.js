import { MOBILE_CHANGED } from './types';

export const mobileChanged = (text) => {
    return {
        type: MOBILE_CHANGED,
        payload: text
    };
};
