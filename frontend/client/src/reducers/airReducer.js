
import { FETCH_AIR, FETCH_AIRS} from '../actions/types'

export default (state = { data : []}, action) => {
    switch(action.type) {
        case FETCH_AIRS :
            return {...state, data:action.payload}
        case FETCH_AIR :
            return {...state, [action.payload.id]:action.payload };
        default :
            return state;
    }
}