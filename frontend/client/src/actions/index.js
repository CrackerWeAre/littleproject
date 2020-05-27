import airs from '../apis/airs'

import {        
    FETCH_AIRS,
    FETCH_AIR, 
    UPDATE_FOL
} from './types'





export const fetchAirs = () => async dispatch => {
    const response = await airs.get(`/getList`)
    dispatch({ type: FETCH_AIRS, payload: response.data})
}

export const fetchAir = (email) => async dispatch => {
    const response = await airs.get(`/getList/${email}`)
    dispatch({ type: FETCH_AIR, payload: response.data})
}


export const updateFollower = (data) => async dispatch => {
    const params = new URLSearchParams();
    params.append('follower',data.data.channel);
    const response = await airs.post(`/updateFollower/${data.userEmail}`, params)
    dispatch({ type: UPDATE_FOL, payload: response.data})
}