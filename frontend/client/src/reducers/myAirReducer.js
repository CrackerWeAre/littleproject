
import { FETCH_AIR } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        
        case FETCH_AIR :
            return {...state, ...action.payload };
        default :
            return state;
    }
}