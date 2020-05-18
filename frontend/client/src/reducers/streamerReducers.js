import _ from 'lodash'
import { FETCH_STREAMER, FETCH_STREAMERS, EDIT_STREAMER, DELETE_STREAMER, CREATE_STREAMER} from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_STREAMERS :
            return {...state, ..._.mapKeys(action.payload, '_id')}
        case FETCH_STREAMER :
            return {...state, ..._.mapKeys(action.payload, '_id')};
        case CREATE_STREAMER : 
            console.log(action.payload)
            return {...state, [action.payload.id]:action.payload }; 
        case EDIT_STREAMER : 
            return {...state, [action.payload.id]:action.payload }; 
        case DELETE_STREAMER : 
            return _.omit(state, action.payload)
        default :
            return state;

    }
}
