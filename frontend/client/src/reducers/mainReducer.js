
import { DRAWER_SET, DARKMODE_SET, LIVEMODE_SET } from '../actions/types'

export default (state = {drawer: true, darkmode: false, liveview: true}, action) => {
    switch(action.type) {
        case DRAWER_SET :
            return {...state, drawer: action.payload};
        case DARKMODE_SET :
            return {...state, darkmode: action.payload};
        case LIVEMODE_SET :
            return {...state, liveview: action.payload};
        default :
            return state;
    }
}