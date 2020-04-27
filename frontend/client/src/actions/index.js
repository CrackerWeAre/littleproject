import airs from '../apis/airs'
import history from '../history'

import {
    FETCH_AIRS,
    FETCH_AIR, 
} from './types'



export const fetchAirs = () => async dispatch => {
    const response = await airs.get('/result')
    dispatch({ type: FETCH_AIRS, payload: response.data})
}

export const fetchAir = (id) => async dispatch => {
    const response = await airs.get(`/result/${id}`)
    dispatch({ type: FETCH_AIR, payload: response.data})
}
