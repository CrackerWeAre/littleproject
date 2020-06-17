import airs from '../apis/airs'
import history from '../history'

import {        
    FETCH_STREAMERS,
    FETCH_STREAMER, 
    EDIT_STREAMER,
    DELETE_STREAMER,
    CREATE_STREAMER,
    CHECK_STREAMER
} from './types'



export const fetchStreamers = () => async dispatch => {
    const response = await airs.get(`/admin/getStreamers`)
    
    dispatch({ type: FETCH_STREAMERS, payload: response.data})
}

export const fetchStreamer = (_id) => async dispatch => {
    const response = await airs.get(`/admin/getStreamer/${_id}`)
    dispatch({ type: FETCH_STREAMER, payload: response.data})
}


export const editStreamer = (_id, formValues, token) => async dispatch => {
    const params = new URLSearchParams();
    params.append('platform',formValues.platform);
    params.append('channel',formValues.channel);
    params.append('channelID',formValues.channelID);
    params.append('category',formValues.channelID);
    const defaultOptions = {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
    const response = await airs.post(`/admin/updateStreamer/${_id}`, params, {...defaultOptions})
    dispatch({ type: EDIT_STREAMER, payload: response.data})
    history.push('/admin')
}

export const deleteStreamer = (_id, token) => async dispatch => {
    const defaultOptions = {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
    await airs.get(`/admin/deleteStreamer/${_id}`, {...defaultOptions})
    dispatch({ type: DELETE_STREAMER, payload: _id})
    history.push('/admin')
}

export const createStream = (formValues, token) => async (dispatch) => {
    const params = new URLSearchParams();
    params.append('platform',formValues.platform);
    params.append('channel',formValues.channel);
    params.append('channelID',formValues.channelID);
    params.append('category',formValues.category);

    const defaultOptions = {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
    
    const response = await airs.post('/admin/createStreamer', params, { ...defaultOptions })
    console.log(response)
    dispatch({ type: CREATE_STREAMER, payload: response.data})
    history.push('/admin')
}


export const checkStream = (formValues, token) => async (dispatch) => {
    const params = new URLSearchParams();
    params.append('platform',formValues.platform);
    params.append('channelID',formValues.channelID);
    console.log(params, token)

    const defaultOptions = {
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
    
    const response = await airs.get('/admin/existStreamer', params, { ...defaultOptions })
    console.log(response)
    dispatch({ type: CHECK_STREAMER, payload: response.data})
}