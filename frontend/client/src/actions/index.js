import airs from '../apis/airs'

import {        
    FETCH_AIRS,
    UPDATE_FOL,
    DELETE_FOL,
    GET_FOL,
    FETCH_FOL_AIRS,
    UPDATE_BLO,
    DELETE_BLO
} from './types'





export const fetchAirs = () => async dispatch => {
    const response = await airs.get(`/getList/live`)
    dispatch({ type: FETCH_AIRS, payload: response.data})
}

 

export const fetchFollowingAirs = (email) => async dispatch => {

    const response = await airs.get(`/getList/following/${email}`)
    dispatch({ type: FETCH_FOL_AIRS, payload: response.data})
}


export const updateFollower = (data) => async dispatch => {
    console.log(data)
    const params = new URLSearchParams();
    params.append('following',data.data._uniq);
    const response = await airs.post(`/following/updateUserInfo/${data.userEmail}`, params)
    dispatch({ type: UPDATE_FOL, payload: response.data})
}

export const deleteFollower = (data) => async dispatch => {
    console.log(data)
    const params = new URLSearchParams();
    params.append('following',data.data._uniq);
    const response = await airs.post(`/following/deleteUserInfo/${data.userEmail}`, params)
    dispatch({ type: DELETE_FOL, payload: response.data})
}

export const getFollower = (email) => async dispatch => {
    const response = await airs.get(`/following/getUserInfo/${email}`)
    dispatch({ type: GET_FOL, payload: response.data})
}

export const updateBlock = (data) => async dispatch => {
    console.log(data)
    const params = new URLSearchParams();
    params.append('block',data.data._uniq);
    const response = await airs.post(`/block/updateUserInfo/${data.userEmail}`, params)
    dispatch({ type: UPDATE_BLO, payload: response.data})
}

export const deleteBlock = (data) => async dispatch => {
    console.log(data)
    const params = new URLSearchParams();
    params.append('block',data.data._uniq);
    const response = await airs.post(`/block/deleteUserInfo/${data.userEmail}`, params)
    dispatch({ type: DELETE_BLO, payload: response.data})
}


