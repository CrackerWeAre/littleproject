
import {        
    POST_LIVE,
    POST_DATA,
    SET_PLACE
} from '../actions/types'

const initialState = {username: "", pathname: "", residencetime: 0}
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_PLACE :
            return {...state, ...action.payload};
        case POST_LIVE :
            return {...state, ...action.payload};
        case POST_DATA :
            return {...state};
        default :
            return state;
    }
}