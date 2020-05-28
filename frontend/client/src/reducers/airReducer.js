
import { FETCH_AIRS } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_AIRS :
            return {...state, ...action.payload}
        default :
            return state;
    }
}