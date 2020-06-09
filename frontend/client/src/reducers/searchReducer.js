
import { SEARCH_STREAMERS } from '../actions/types'

export default (state = {data : []}, action) => {
    switch(action.type) {
        case SEARCH_STREAMERS :
            return {...state.data, ...action.payload}
        default :
            return state;
    }
}