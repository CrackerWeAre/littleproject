import airs from '../apis/airs'

import {        
    FETCH_AIRS,
    FETCH_AIR, 
} from './types'





export const fetchAirs = () => async dispatch => {
    const response = await airs.get(`/getList`)
    console.log(response)
    dispatch({ type: FETCH_AIRS, payload: response.data})
}

export const fetchAir = (id) => async dispatch => {
    const response = await airs.get(`/posts/${id}`)
    dispatch({ type: FETCH_AIR, payload: response.data})
}
