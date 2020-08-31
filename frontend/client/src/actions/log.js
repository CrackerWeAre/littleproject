import airs from '../apis/airs'
import history from '../history'

import {        
    POST_PLACE,
    POST_LIVE,
    SET_PLACE
} from './types'

export const setPlaceLog = (user, pathname) => dispatch => {
    console.log('SetPlace')
    const time = new Date().getTime()/1000;
    const data = {"username":user, "pathname":pathname, "residencetime":time};
    dispatch({ type: SET_PLACE, payload: data})
}


export const postPlaceLog = (user, prevpathname, postpathname, residencetime) => async dispatch => {
    console.log('PostPlace')
    const params = new URLSearchParams();
    const nowtime = new Date().getTime()/1000;
    const time = nowtime-residencetime;
    params.append('residencetime',time)
    params.append('username',user);
    params.append('pathname',prevpathname)
    await airs.post(`/logs/userHistory`, params)
    const data = {"username":user.username, "pathname":postpathname, "residencetime":nowtime};
    dispatch({ type: POST_PLACE, payload: data})
}


export const postLiveLog = (user, data) => async dispatch => {
    const params = new URLSearchParams();
    params.append('username',user);
    params.append('platform',data.platform);
    params.append('_uniq',data._uniq);
    params.append('channelId',data.channelId);
    var item =''
    const response = await airs.post(`/logs/viewHistory`, params)
    if(response.data==="Done!"){
        item=response.data
    }
    dispatch({ type: POST_LIVE, payload: item})
}

