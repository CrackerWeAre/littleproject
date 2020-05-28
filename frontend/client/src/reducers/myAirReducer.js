
import { GET_FOL, UPDATE_FOL, DELETE_FOL } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        
        case GET_FOL :
            return {...state, ...action.payload };
        case UPDATE_FOL :
            return {...state};
        case DELETE_FOL :
            return {...state};
        default :
            return state;
    }
}