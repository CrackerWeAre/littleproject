
import { DRAWER_SET, DARKMODE_SET } from '../actions/types'

export default (state = {drawer: true, darkmode: false}, action) => {
    switch(action.type) {
        case DRAWER_SET :
            return {...state, drawer: action.payload};
        case DARKMODE_SET :
            return {...state, darkmode: action.payload};
        default :
            return state;
    }
}