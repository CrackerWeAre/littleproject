import { FETCH_SCHEDULELIST } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SCHEDULELIST:
            const newData = [];
            action.payload.map(data => {
                newData[data._id] = data;
            });
            return { ...state, ...newData };
        default:
            return state;
    }
}