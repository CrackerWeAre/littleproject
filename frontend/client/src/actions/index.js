import airs from '../apis/airs'
import history from '../history'

import {        
    FETCH_AIRS,
    UPDATE_FOL,
    DELETE_FOL,
    GET_FOL,
    FETCH_FOL_AIRS,
    UPDATE_BLO,
    DELETE_BLO,
    FETCH_CATE_AIRS,
    SEARCH_STREAMERS,
    FETCH_BLO_AIRS,
    DRAWER_SET,
    DARKMODE_SET,
    SEND_REVIEW,
    LIVEMODE_SET,
    COUNT_CATE_AIRS
} from './types'


export const fetchAirs = () => async dispatch => {
    const response = await airs.get(`/getList/live`)
    dispatch({ type: FETCH_AIRS, payload: response.data})
}

export const fetchCateAirs = (_id) => async dispatch => {
    const response = await airs.get(`/getList/live/${_id}`)
    dispatch({ type: FETCH_CATE_AIRS, payload: response.data})
}
 

export const countCateAirs = () => async dispatch => {
    const response = await airs.get('/getList/live/allCate')
    dispatch({ type: COUNT_CATE_AIRS, payload: response.data})
}

export const fetchFollowingAirs = (email) => async dispatch => {

    const response = await airs.get(`/getList/following/${email}`)
    dispatch({ type: FETCH_FOL_AIRS, payload: response.data})
    
}

export const fetchBlockedAirs = (email) => async dispatch => {

    const response = await airs.get(`/getList/block/${email}`)
    dispatch({ type: FETCH_BLO_AIRS, payload: response.data})
}


export const updateFollower = (data) => async dispatch => {
    var item = {};
    const params = new URLSearchParams();
    params.append('following',data.data._uniq);
    const response = await airs.post(`/following/updateUserInfo/${data.auth.userInfo.email}`, params)
    if(response.data==="Update!"){
        item= data.data
    }
    dispatch({ type: UPDATE_FOL, payload: item})
}

export const deleteFollower = (data) => async dispatch => {
    var item = {};
    const params = new URLSearchParams();
    params.append('following',data.data._uniq);
    const response = await airs.post(`/following/deleteUserInfo/${data.auth.userInfo.email}`, params)
    if(response.data==="Update!"){
        item= data.data
    }
    dispatch({ type: DELETE_FOL, payload: item })
}

export const getFollower = (email) => async dispatch => {
    const response = await airs.get(`/following/getUserInfo/${email}`)
    dispatch({ type: GET_FOL, payload: response.data})
}

export const updateBlock = (data) => async dispatch => {
    var item = {};
    const params = new URLSearchParams();
    params.append('block',data.data._uniq);
    const response = await airs.post(`/block/updateUserInfo/${data.auth.userInfo.email}`, params)
    if(response.data==="Update!"){
        item= data.data
    }
    dispatch({ type: UPDATE_BLO, payload: item})
}

export const deleteBlock = (data) => async dispatch => {
    var item = {};
    const params = new URLSearchParams();
    params.append('block',data.data._uniq);
    const response = await airs.post(`/block/deleteUserInfo/${data.auth.userInfo.email}`, params)
    if(response.data==="Update!"){
        item= data.data
    }
    dispatch({ type: DELETE_BLO, payload: item})
}


export const searchStreamer = (data) => async dispatch => {
    const item = data.replace("\?", "?")
    const response = await airs.get(`/search/${item}`)
    dispatch({ type:SEARCH_STREAMERS, payload: response.data})
    history.push(`/main/search/${data}`)
}

export const drawerSet = (data) => async dispatch => {
    dispatch({type: DRAWER_SET, payload: !data })
}

export const darkModeSet = (data) => async dispatch => {
    dispatch({type: DARKMODE_SET, payload: !data })
}

export const liveModeSet = (data) => async dispatch => {
    dispatch({type: LIVEMODE_SET, payload: !data })
}


export const sendReview = (data) => async dispatch => {
    const params = new URLSearchParams();
    params.append('title',data.title);
    params.append('email',data.email);
    params.append('message',data.message);
    const response = await airs.post(`/feedback/send`, params)
    console.log(response)
    dispatch({ type: SEND_REVIEW, payload: response})
    history.push(`/`)
}