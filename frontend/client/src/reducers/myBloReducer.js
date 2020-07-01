import _ from 'lodash';

import {FETCH_BLO_AIRS, UPDATE_BLO, DELETE_BLO } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_BLO_AIRS :
            return {...state, ...action.payload}
        case UPDATE_BLO :
            return {...state, [action.payload.id]:action.payload };
        case DELETE_BLO  :
            return _.omit(state, action.payload)
        default :
            return state;
    }
}