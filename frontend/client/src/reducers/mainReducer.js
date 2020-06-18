
import { DRAWER_SET } from '../actions/types'

export default (state = true, action) => {
    switch(action.type) {
        case DRAWER_SET :
            return action.payload
        default :
            return state;
    }
}