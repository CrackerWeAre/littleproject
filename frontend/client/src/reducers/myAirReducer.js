import _ from 'lodash';

import { UPDATE_FOL, DELETE_FOL, FETCH_FOL_AIRS, SIGN_OUT } from '../actions/types';
const initialstate = {};
export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_FOL_AIRS :
            var hello = []
            if(typeof(action.payload)==="Array"){
                if(action.payload!==null||action.payload){
              
                    action.payload.map((innerdata) => {
                        hello[innerdata._id]=innerdata
                    })
                }
            }
            
            return {...state, ...hello}
        case UPDATE_FOL :
            return {...state, [action.payload._id]:action.payload };
        case DELETE_FOL :
            return _.omit(state, action.payload._id)
        case SIGN_OUT :
            return {...initialstate}
        default :
            return state;
    }
}