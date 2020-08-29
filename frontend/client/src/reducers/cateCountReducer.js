
import { COUNT_CATE_AIRS } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case COUNT_CATE_AIRS :
            return {...state, ...action.payload};
        default :
            return state;
    }
}