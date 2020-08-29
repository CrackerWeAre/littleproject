import airs from '../apis/airs'
import history from '../history'

import {        
    POST_PLACE,
    POST_LIVE,
    POST_DATA,
    SET_PLACE
} from './types'

export const setPlaceLog = (user, pathname) => async dispatch => {
    const time = new Date().getTime()/1000;
    const data = await {"username":user, "pathname":pathname, "residencetime":time};
    dispatch({ type: SET_PLACE, payload: data})
}


export const postPlaceLog = (user, prevpathname, postpathname, residencetime) => async dispatch => {
    const params = new URLSearchParams();
    const nowtime = new Date().getTime()/1000;
    const time = nowtime-residencetime;
    params.append('residencetime',time)
    params.append('username',user);
    params.append('pathname',prevpathname)
    const data = {"username":user.username, "pathname":postpathname, "residencetime":nowtime};
    await airs.post(`/logs/userHistory`, params)
    dispatch({ type: POST_PLACE, payload: data})
}


export const postLiveLog = (user, data) => async dispatch => {
    const params = new URLSearchParams();
    params.append('username',user);
    params.append('platform',data.platform);
    params.append('_uniq',data.platform);
    params.append('channelId',data.channelId);
    const response = await airs.post(`/logs/viewHistory`, params)
    dispatch({ type: POST_LIVE, payload: response})
}

