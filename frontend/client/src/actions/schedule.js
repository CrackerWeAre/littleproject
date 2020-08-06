import airs from '../apis/airs';

import {
    FETCH_SCHEDULELIST
} from './types';

export const fetchScheduleList = () => async dispatch => {
    const response = await airs.get(`/getList/scheduleList`);
    dispatch({ type: FETCH_SCHEDULELIST, payload: response.data });
}