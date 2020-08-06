import airs from '../apis/airs'
import history from '../history'

import {        
    POST_PLACE,
    POST_LIVE,
    POST_DATA
} from './types'


export const postPlaceLog = (user, pathname) => async dispatch => {
    const params = new URLSearchParams();
    params.append('username',user.username);
    params.append('pathname',pathname)
    const response = await airs.post(``, params)
    dispatch({ type: POST_PLACE, payload: response})
}


export const postLiveLog = (user, data) => async dispatch => {
    const params = new URLSearchParams();
    params.append('username',user.username);
    params.append('platform',data.platform);
    params.append('_uniq',data.platform);
    params.append('channelId',data.channelId);
    const response = await airs.post(``, params)
    dispatch({ type: POST_LIVE, payload: response})
}

