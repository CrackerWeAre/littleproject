import _ from 'lodash'
import { FETCH_STREAMER, FETCH_STREAMERS, EDIT_STREAMER, DELETE_STREAMER, CREATE_STREAMER, CHECK_STREAMER} from '../actions/types'

export default (state = {data:{}, validation:{}}, action) => {
    switch(action.type) {
        case FETCH_STREAMERS :
            return {...state, data: _.mapKeys(action.payload, '_id')}
        case FETCH_STREAMER :
            return {...state, data: _.mapKeys(action.payload, '_id')};
        case CREATE_STREAMER : 
            return {...state}; 
        case EDIT_STREAMER : 
            return {...state}; 
        case DELETE_STREAMER : 
            return {...state}
        case CHECK_STREAMER :
            return {...state, validation: action.payload}
        default :
            return state;
    }
}
