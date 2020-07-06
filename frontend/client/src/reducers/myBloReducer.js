import _ from 'lodash';

import {FETCH_BLO_AIRS, UPDATE_BLO, DELETE_BLO } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_BLO_AIRS :
            var hello = []
            action.payload.map((innerdata) => {
                hello[innerdata._id]=innerdata
            })
            return {...state, ...hello}
        case UPDATE_BLO :
            return {...state, [action.payload.id]:action.payload };
        case DELETE_BLO  :
            return _.omit(state, action.payload._id)
        default :
            return state;
    }
}