import airs from '../apis/airs'
import history from '../history'
import axios from 'axios'

import {        
    FETCH_STREAMERS,
    FETCH_STREAMER, 
    EDIT_STREAMER,
    DELETE_STREAMER,
    CREATE_STREAMER
} from './types'



export const fetchStreamers = () => async dispatch => {
    const response = await airs.get(`/getStreamers`)
    
    dispatch({ type: FETCH_STREAMERS, payload: response.data})
}

export const fetchStreamer = (_id) => async dispatch => {
    const response = await airs.get(`/getStreamer/${_id}`)
    dispatch({ type: FETCH_STREAMER, payload: response.data})
}


export const editStreamer = (_id, formValues, token) => async dispatch => {
    const params = new URLSearchParams();
    params.append('platform',formValues.platform);
    params.append('channel',formValues.channel);
    params.append('channelID',formValues.channelID);
    const defaultOptions = {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
    const response = await airs.post(`/updateStreamer/${_id}`, params, {...defaultOptions})
    dispatch({ type: EDIT_STREAMER, payload: response.data})
    history.push('/admin')
}

export const deleteStreamer = (_id, token) => async dispatch => {
    const defaultOptions = {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
    await airs.get(`/deleteStreamer/${_id}`, {...defaultOptions})
    dispatch({ type: DELETE_STREAMER, payload: _id})
    history.push('/admin')
}

export const createStream = (formValues, token) => async (dispatch) => {
    const params = new URLSearchParams();
    params.append('platform',formValues.platform);
    params.append('channel',formValues.channel);
    params.append('channelID',formValues.channelID);

    const defaultOptions = {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
    
    const response = await airs.post('/createStreamer', params, { ...defaultOptions })
    
    dispatch({ type: CREATE_STREAMER, payload: response.data})
    history.push('/admin')
}


