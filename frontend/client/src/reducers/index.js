import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import airReducer from './airReducer'
import streamerReducer from './streamerReducers'
import authReducer from './authReducer';

export default combineReducers ({
    auth: authReducer,
    form: formReducer,
    airs: airReducer,
    streamers: streamerReducer
});