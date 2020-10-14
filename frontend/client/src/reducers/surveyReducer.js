import { FETCH_STREAMERLIST, FETCH_STREAMER_PLATFORM } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMERLIST:
        case FETCH_STREAMER_PLATFORM:
            const newData = [];
            action.payload.map(data => {
                newData[data._id] = data;
            });
            return { ...state, ...newData };

        default:
            return state;
    }
}