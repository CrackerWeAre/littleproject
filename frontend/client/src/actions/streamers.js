import airs from '../apis/airs';

import {
    FETCH_STREAMERLIST,
    FETCH_STREAMER_PLATFORM
} from './types';

export const fetch_streamerlist = () => async dispatch => {
    const response = await airs.get(`/getList/all`)
    console.log(response)
    dispatch({ type: FETCH_STREAMERLIST, payload: response.data})
}

export const fetch_streamer_platform = (_platform) => async dispatch => {
    const response = await airs.get(`/getList/platform/${_platform}`)
    console.log(response)
    dispatch({ type: FETCH_STREAMER_PLATFORM, payload: response.data})
}
