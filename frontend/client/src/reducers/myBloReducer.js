import _ from 'lodash';

import {FETCH_BLO_AIRS, UPDATE_BLO, DELETE_BLO, SIGN_OUT } from '../actions/types'
const initialstate = {};
export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_BLO_AIRS :
            var hello = []
           
            if(typeof(action.payload)==="Array"){
                if(action.payload!==null||action.payload){
                    action.payload.map((innerdata) => {
                        hello[innerdata._id]=innerdata
                    })
                }
            }
            return {...state, ...hello}
        case UPDATE_BLO :
            return {...state, [action.payload.id]:action.payload };
        case DELETE_BLO  :
            return _.omit(state, action.payload._id)
        case SIGN_OUT :
            return {...initialstate}
        default :
            return state;
    }
}