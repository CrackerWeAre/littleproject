import _ from 'lodash';

import { UPDATE_FOL, DELETE_FOL, FETCH_FOL_AIRS } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_FOL_AIRS :
            return {...state, ...action.payload}
        case UPDATE_FOL :
            return {...state, [action.payload._id]:action.payload };
        case DELETE_FOL :
            return _.omit(state, action.payload)
        default :
            return state;
    }
}