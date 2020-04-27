import _ from 'lodash'
import { FETCH_AIR, FETCH_AIRS} from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_AIRS :
            return {...state, ..._.mapKeys(action.payload, 'airId')}
        case FETCH_AIR :
            return {...state, [action.payload.id]:action.payload };
        default :
            return state;
    }
}