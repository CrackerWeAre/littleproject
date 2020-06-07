
import { FETCH_CATE_AIRS } from '../actions/types'

export default (state = {data : []}, action) => {
    switch(action.type) {
        case FETCH_CATE_AIRS :
            return {...state.data, ...action.payload}
        default :
            return state;
    }
}