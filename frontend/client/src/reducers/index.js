import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import airReducer from './airReducer'
import streamerReducer from './streamerReducers'

export default combineReducers ({
    form: formReducer,
    airs: airReducer,
    streamers: streamerReducer,
});