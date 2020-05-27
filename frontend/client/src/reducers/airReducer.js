
import { FETCH_AIRS, UPDATE_FOL} from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_AIRS :
            return {...state, ...action.payload}
        case UPDATE_FOL :
            return {...state};
        default :
            return state;
    }
}