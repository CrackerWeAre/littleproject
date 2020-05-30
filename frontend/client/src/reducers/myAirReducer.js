
import { UPDATE_FOL, DELETE_FOL, FETCH_FOL_AIRS, UPDATE_BLO, DELETE_BLO } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_FOL_AIRS :
            return {...state, ...action.payload}
        case UPDATE_FOL :
            return {...state};
        case DELETE_FOL :
            return {...state};
        case UPDATE_BLO :
            return {...state};
        case DELETE_BLO  :
            return {...state};
        default :
            return state;
    }
}