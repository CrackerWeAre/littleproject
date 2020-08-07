
import { SEND_REVIEW } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case SEND_REVIEW :
            return {...state, drawer: action.payload};
        default :
            return state;
    }
}