
import {FETCH_BLO_AIRS, UPDATE_BLO, DELETE_BLO } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_BLO_AIRS :
            return {...state, ...action.payload}
        case UPDATE_BLO :
            return {...state};
        case DELETE_BLO  :
            return {...state};
        default :
            return state;
    }
}