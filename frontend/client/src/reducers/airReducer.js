
import { FETCH_AIRS } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_AIRS :
            var hello = []
            action.payload.map((innerdata) => {
                hello[innerdata._id]=innerdata
            })
            return {...state, ...hello}
        default :
            return state;
    }
}