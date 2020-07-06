import _ from 'lodash';

import { UPDATE_FOL, DELETE_FOL, FETCH_FOL_AIRS } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_FOL_AIRS :
            var hello = []
           
            if(action.payload!==null){
              
                action.payload.map((innerdata) => {
                    hello[innerdata._id]=innerdata
                })
            }
            return {...state, ...hello}
        case UPDATE_FOL :
            return {...state, [action.payload._id]:action.payload };
        case DELETE_FOL :
            return _.omit(state, action.payload._id)
        default :
            return state;
    }
}