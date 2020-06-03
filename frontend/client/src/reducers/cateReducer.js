
import { FETCH_CATE_AIRS } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_CATE_AIRS :
            return {...state, ...action.payload}
        default :
            return state;
    }
}