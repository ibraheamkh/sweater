import { 
    BMC_UPDATE 
} from './types';


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
